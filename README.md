# 🎧 环境音制造器 | Ambient Sound Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/Platform-Android-green.svg)](https://www.android.com)

一款混合白噪音与环境音的放松应用，帮助您专注工作、放松身心或安然入睡。

## ✨ 功能特性

### 🎵 丰富的声音库
- **90+ 种高品质环境音**，涵盖 8 大类别：
  - 🌧️ **雨声** - 小雨、大雨、雷雨、伞上雨、帐篷雨等 16 种
  - 🌿 **自然** - 海浪、风声、河流、篝火、丛林等 14 种
  - 🏙️ **城市** - 交通、人群、烟花等 7 种
  - ✈️ **交通** - 飞机、火车、帆船等 6 种
  - 📍 **场所** - 咖啡厅、图书馆、机场、教堂等 17 种
  - 🐾 **动物** - 鸟叫、蟋蟀、猫、狗、鲸鱼等 16 种
  - 📻 **噪音** - 白噪音、粉噪音、钢琴等 6 种
  - 🔧 **物件** - 键盘、打字机、唱片、颂钵等 14 种

### 🎛️ 混音功能
- 同时播放多种声音，创建专属混音
- 每种声音独立音量控制
- 一键保存和加载自定义混音预设

### ⏰ 睡眠定时器
- 预设时间选项：15分钟、30分钟、45分钟、1小时、1.5小时、2小时
- 支持自定义时长（最长8小时）
- 最后30秒渐弱停止，自然过渡

### 🎨 精美界面
- 深色/浅色主题自动切换
- 毛玻璃效果与现代设计
- 流畅的动画交互
- 响应式布局适配各种屏幕

### 🌊 动态背景
- 根据播放声音自动切换背景效果
- 雨滴、落叶、波浪、火焰等动态粒子

## 📱 截图

> *待添加*

## 🛠️ 技术栈

| 技术 | 说明 |
|------|------|
| HTML5 / CSS3 / JavaScript | 前端基础技术 |
| Capacitor 8 | 跨平台原生运行时 |
| Font Awesome 6.4 | 图标库 |
| Web Audio API | 音频播放 |

## 🚀 快速开始

### 环境要求

- Node.js 18+
- JDK 21
- Android Studio & Android SDK

### 安装依赖

```bash
cd AmbientSoundGenerator
npm install
```

### 开发调试

```bash
# 同步资源到 Android
npx cap sync android

# 在 Android Studio 中打开
npx cap open android
```

### 构建 APK

```bash
# macOS (Apple Silicon)
export JAVA_HOME=/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home
export ANDROID_HOME=$HOME/Android/Sdk

# 同步并构建
npx cap sync android
cd android
./gradlew assembleDebug

# APK 输出位置
# android/app/build/outputs/apk/debug/app-debug.apk
```

## 📁 项目结构

```
AmbientSoundGenerator/
├── www/                    # Web 资源
│   ├── index.html         # 主页面
│   ├── app.js             # 应用逻辑
│   └── styles.css         # 样式
├── audio/                  # 音频文件
│   ├── rain/              # 雨声
│   ├── nature/            # 自然声
│   ├── urban/             # 城市声
│   ├── transport/         # 交通声
│   ├── places/            # 场所声
│   ├── animals/           # 动物声
│   ├── noise/             # 噪音
│   └── things/            # 物件声
├── capacitor.config.json   # Capacitor 配置
├── package.json           # 项目配置
└── README.md              # 说明文档
```

## 🎯 路线图

- [ ] iOS 支持
- [ ] 在线音频流
- [ ] 更多声音类别
- [ ] 社区预设分享
- [ ] 小组件支持

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

[MIT License](LICENSE)

---

<p align="center">Made with ❤️ for better sleep and focus</p>