# Android APK 构建问题排查指南

> 本文档记录了在构建 WhiteNoise Android APK 过程中遇到的问题及解决方案，供后续开发参考。

## 环境信息

- **项目类型**: Capacitor 混合应用
- **构建工具**: Gradle
- **系统**: macOS (Darwin 25.4.0)
- **包管理器**: Homebrew

---

## 问题 1: Java 运行时找不到

### 错误信息
```
The operation couldn't be completed. Unable to locate a Java Runtime.
Please visit http://www.java.com for information about installing Java.
```

### 原因
系统没有配置 `JAVA_HOME` 环境变量，Gradle 无法找到 JDK。

### 解决方案
通过 Homebrew 安装的 JDK 位于非标准路径，需要手动设置：

```bash
# 查找 Homebrew 安装的 JDK
ls /opt/homebrew/opt/openjdk*/bin/java

# 设置 JAVA_HOME (推荐 JDK 21，Capacitor 8.x 需要)
export JAVA_HOME=/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home
```

### 提示
- Capacitor 8.x 要求 JDK 21（不是 JDK 17）
- 检查错误信息中的 `invalid source release: 21` 表明 JDK 版本过低

---

## 问题 2: Android SDK 许可证未接受

### 错误信息
```
Failed to install the following Android SDK packages as some licences have not been accepted.
     build-tools;35.0.0 Android SDK Build-Tools 35
     platforms;android-36 Android SDK Platform 36
```

### 原因
Android SDK 组件需要先接受许可证才能安装使用。

### 解决方案

**方法 1: 手动创建许可证文件**
```bash
mkdir -p ~/Android/Sdk/licenses
echo -e "\n24333f8a63b6825ea9c5514f83c2829b004d1fee" > ~/Android/Sdk/licenses/android-sdk-license
echo -e "\n84831b9409646a918e30573bab4c9c91346d8abd" > ~/Android/Sdk/licenses/android-sdk-preview-license
echo -e "\nd975f751698a77e662f1cd748a3e6214bff89530" >> ~/Android/Sdk/licenses/android-sdk-license
```

**方法 2: 使用 sdkmanager**
```bash
~/Android/Sdk/cmdline-tools/latest/bin/sdkmanager --licenses
```

---

## 问题 3: Android SDK 路径配置错误

### 错误信息
```
WARNING: The following problems were found when resolving the SDK location:
Where: sdk.dir property in local.properties file. Problem: Directory does not exist
```

### 原因
`local.properties` 中配置的 SDK 路径不正确。

### 常见混淆
- `~/.android` - Android 配置目录（非 SDK）
- `~/Android/Sdk` 或 `~/Library/Android/sdk` - 实际的 SDK 安装目录

### 解决方案
```bash
# 创建正确的 local.properties
echo "sdk.dir=$HOME/Android/Sdk" > android/local.properties
```

---

## 问题 4: JDK 版本不匹配

### 错误信息
```
Execution failed for task ':capacitor-android:compileDebugJavaWithJavac'.
> Java compilation initialization error
    error: invalid source release: 21
```

### 原因
项目配置要求 Java 21，但使用了 JDK 17。

### 解决方案
```bash
# 使用 JDK 21
export JAVA_HOME=/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home
```

---

## 问题 5: 工作目录问题

### 现象
在 `android` 目录下运行命令后，相对路径失效，找不到生成的 APK。

### 解决方案
始终从项目根目录运行构建命令：

```bash
# 正确做法
cd /path/to/project
export JAVA_HOME=/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home
export ANDROID_HOME=$HOME/Android/Sdk
./android/gradlew -p android assembleDebug

# APK 输出位置
cp android/app/build/outputs/apk/debug/app-debug.apk ./WhiteNoise.apk
```

---

## 完整构建命令

```bash
#!/bin/bash
# 一键构建脚本

# 设置环境变量
export JAVA_HOME=/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home
export ANDROID_HOME=$HOME/Android/Sdk
export PATH="$JAVA_HOME/bin:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$PATH"

# 确保 local.properties 正确
echo "sdk.dir=$ANDROID_HOME" > android/local.properties

# 同步 Capacitor 资源
npx cap sync android

# 构建 APK
cd android
./gradlew assembleDebug

# 复制到项目根目录
cp app/build/outputs/apk/debug/app-debug.apk ../WhiteNoise.apk
cd ..

echo "✅ APK 已生成: WhiteNoise.apk"
```

---

## 关键路径速查

| 项目 | 路径 |
|------|------|
| Homebrew JDK 21 | `/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home` |
| Homebrew JDK 17 | `/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home` |
| Android SDK | `~/Android/Sdk` 或 `~/Library/Android/sdk` |
| 许可证目录 | `~/Android/Sdk/licenses/` |
| APK 输出 | `android/app/build/outputs/apk/debug/app-debug.apk` |

---

## 排查 Checklist

- [ ] `JAVA_HOME` 是否正确设置？
- [ ] JDK 版本是否为 21？（查看错误中的 `invalid source release`）
- [ ] `ANDROID_HOME` 是否指向正确的 SDK 目录？
- [ ] `local.properties` 中的 `sdk.dir` 是否正确？
- [ ] Android SDK 许可证是否已接受？
- [ ] 是否从项目根目录运行命令？

---

*文档生成时间: 2026-03-31*