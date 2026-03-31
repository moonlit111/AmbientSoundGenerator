# 环境音制造器 Ambient Sound Generator

一款混合白噪音与环境音的放松应用，使用 Capacitor 构建，支持 Android 平台。

## 功能

- 90+ 种高品质环境音（雨声、自然、城市、交通、场所、动物、噪音、物件）
- 混音功能 - 同时播放多种声音并独立调节音量
- 睡眠定时器 - 支持渐弱停止
- 预设保存与快速加载
- 深色/浅色主题
- 动态背景效果

## 技术栈

- HTML / CSS / JavaScript
- Capacitor 8 (Android)
- Font Awesome 6.4

## 开发

```bash
npm install
npx cap sync android
npx cap open android
```

## 构建 APK

```bash
export JAVA_HOME=/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home
export ANDROID_HOME=$HOME/Android/Sdk
npx cap sync android
./android/gradlew -p android assembleDebug
```

## 许可证

MIT