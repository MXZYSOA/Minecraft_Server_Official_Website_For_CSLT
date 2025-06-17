# 🌟 创世乐土 Minecraft 服务器官方网站

由 PixelCraft 工作室开发

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)

## 📖 项目简介

创世乐土 Minecraft 服务器官方网站是由 PixelCraft 工作室精心打造的现代化、响应式的游戏服务器展示网站。网站采用组件化设计，为玩家提供服务器信息、游戏指南、排行榜、赞助支持等功能，致力于打造最佳的 Minecraft 游戏社区体验。

## ✨ 主要功能

### 🏠 首页展示
- 服务器基本信息展示
- 实时服务器状态
- 快速导航入口
- 精美的视觉设计

### 🎮 游戏模式
- **生存服务器**: 体验最纯粹的 Minecraft 生存乐趣
- **空岛服务器**: 在虚空中建造属于你的空中王国
- 详细的游戏模式介绍和特色功能

### 📚 新手指南
- 完整的服务器入坑指南
- 详细的游戏规则说明
- 常用指令和功能介绍
- 互动式指南体验

### 🏆 玩家排行榜
- 多维度玩家数据统计
- 实时排行榜更新
- 玩家成就展示
- 数据可视化图表

### 💎 便捷功能
- 服务器特色功能介绍
- 插件和工具说明
- 使用教程和技巧

### 💰 赞助支持
- 多层级赞助方案
- 透明的资金使用说明
- 赞助者权益展示

### 🖼️ 图片画廊
- 服务器精美截图
- 玩家作品展示
- 活动照片集锦

### 👥 团队介绍
- 管理团队信息
- 联系方式
- 团队理念

### ❓ 常见问题
- 详细的 FAQ 解答
- 问题分类整理
- 快速搜索功能

## 🛠️ 技术栈

### 前端技术
- **HTML5**: 语义化标记
- **CSS3**: 现代样式设计
- **JavaScript**: 交互功能实现
- **Bootstrap 5.3.2**: 响应式框架
- **Font Awesome**: 图标库
- **Bootstrap Icons**: 图标组件

### 架构特色
- **组件化设计**: 可复用的导航栏和页脚组件
- **响应式布局**: 完美适配各种设备
- **模块化开发**: 清晰的文件结构
- **数据驱动**: JSON 配置文件管理内容

## 📁 项目结构

```
Minecraft_Server_Official_Website_For_CSLT/
├── assets/                 # 静态资源
│   ├── css/               # 样式文件
│   │   ├── common.css     # 公共样式
│   │   ├── main.css       # 主要样式
│   │   └── ...
│   ├── js/                # JavaScript 文件
│   │   ├── main.js        # 主要脚本
│   │   ├── animations.js  # 动画效果
│   │   └── ...
│   ├── sass/              # SASS 源文件
│   └── webfonts/          # 字体文件
├── components/            # 可复用组件
│   ├── navbar.html        # 导航栏组件
│   ├── footer.html        # 页脚组件
│   ├── component-loader.js # 组件加载器
│   └── README.md          # 组件使用说明
├── data/                  # 数据文件
│   ├── guide.json         # 指南数据
│   ├── rankings.json      # 排行榜数据
│   └── sponsor.json       # 赞助数据
├── images/                # 图片资源
├── index.html             # 首页
├── features.html          # 功能介绍
├── survival-server.html   # 生存服务器
├── skyblock-server.html   # 空岛服务器
├── guide.html             # 新手指南
├── rankings.html          # 玩家排行榜
├── sponsor.html           # 赞助支持
├── gallery.html           # 图片画廊
├── team.html              # 团队介绍
├── faq.html               # 常见问题
└── README.md              # 项目说明
```

## 🚀 快速开始

### 环境要求
- 现代浏览器（Chrome、Firefox、Safari、Edge）
- Web 服务器（可选，用于本地开发）

### 本地运行

1. **克隆项目**
   ```bash
   git clone https://github.com/your-username/Minecraft_Server_Official_Website_For_CSLT.git
   cd Minecraft_Server_Official_Website_For_CSLT
   ```

2. **启动本地服务器**
   
   使用 Python（推荐）:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   使用 Node.js:
   ```bash
   npx http-server
   ```
   
   使用 PHP:
   ```bash
   php -S localhost:8000
   ```

3. **访问网站**
   
   打开浏览器访问 `http://localhost:8000`

### 直接部署

由于项目是纯静态网站，可以直接部署到任何静态网站托管服务：

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Cloudflare Pages**
- 传统 Web 服务器

## 🔧 自定义配置

### 修改服务器信息

编辑 `data/guide.json` 文件中的服务器配置：

```json
{
  "title": "🌸 创世乐土MC服务器入坑指南",
  "description": "欢迎来到创世乐土Minecraft服务器！",
  "sections": [
    {
      "title": "🌟 服务器信息",
      "content": [
        {
          "type": "text",
          "content": "🌟 版本：1.8.X – 1.20.X | IP：mc.cslt.top"
        }
      ]
    }
  ]
}
```

### 更新赞助信息

编辑 `data/sponsor.json` 文件：

```json
{
  "sponsorshipTiers": [
    {
      "name": "青铜赞助者",
      "price": "¥30",
      "benefits": ["特权1", "特权2"]
    }
  ]
}
```

### 自定义样式

主要样式文件位于 `assets/css/` 目录：
- `common.css`: 公共样式
- `main.css`: 主要样式
- 各页面内联样式可直接修改

## 🎨 组件系统

项目采用自定义组件系统，支持可复用组件：

### 使用组件

```html
<!-- 导航栏组件 -->
<div data-component="navbar"></div>

<!-- 页脚组件 -->
<div data-component="footer"></div>

<!-- 引入组件加载器 -->
<script src="components/component-loader.js"></script>
```

### 创建新组件

1. 在 `components/` 目录创建 HTML 文件
2. 在页面中使用 `data-component` 属性引用
3. 组件会自动加载和渲染

## 📱 响应式设计

网站采用移动优先的响应式设计：

- **桌面端**: 完整功能展示
- **平板端**: 优化布局适配
- **手机端**: 简化界面，保持核心功能

## 🌐 浏览器兼容性

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- 移动端浏览器

## 🤝 贡献指南

欢迎为项目贡献代码！请遵循以下步骤：

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

### 代码规范

- 使用 2 空格缩进
- 遵循语义化 HTML
- CSS 类名使用 kebab-case
- JavaScript 使用 ES6+ 语法
- 添加适当的注释

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系我们

- **服务器 IP**: `mc.cslt.top`
- **开发团队**: PixelCraft 工作室
- **QQ 群**: 159998932
- **邮箱**: 2106839018@qq.com

## 🙏 致谢

感谢所有为创世乐土服务器贡献的玩家和开发者！
特别感谢 PixelCraft 工作室团队的辛勤付出！

特别感谢：
- Bootstrap 团队提供的优秀框架
- Font Awesome 提供的图标库
- 所有开源项目的贡献者

---

**🎮 加入创世乐土，开启你的 Minecraft 冒险之旅！**