# 组件系统使用说明

本文件夹包含了网站的可复用组件，包括导航栏和页脚等公共元素。

## 文件结构

```
components/
├── navbar.html          # 导航栏组件
├── footer.html          # 页脚组件
├── component-loader.js  # 组件加载器脚本
└── README.md           # 使用说明
```

## 使用方法

### 1. 基本使用

在需要使用组件的HTML页面中：

```html
<!DOCTYPE html>
<html>
<head>
    <!-- 其他头部内容 -->
</head>
<body>
    <!-- 导航栏组件 -->
    <div data-component="navbar"></div>
    
    <!-- 页面主要内容 -->
    <main>
        <!-- 你的内容 -->
    </main>
    
    <!-- 页脚组件 -->
    <div data-component="footer"></div>
    
    <!-- 在页面底部引入组件加载器 -->
    <script src="components/component-loader.js"></script>
</body>
</html>
```

### 2. 手动加载组件

如果需要手动控制组件加载时机：

```html
<script src="components/component-loader.js"></script>
<script>
// 手动加载所有组件
loadComponents().then(() => {
    console.log('所有组件加载完成');
});

// 重新加载特定组件
reloadComponent('navbar').then(() => {
    console.log('导航栏组件重新加载完成');
});
</script>
```

### 3. 组件特性

#### 导航栏组件 (navbar.html)
- 自动高亮当前页面的导航链接
- 响应式设计，支持移动端折叠菜单
- 包含所有主要页面的导航链接

#### 页脚组件 (footer.html)
- 显示服务器信息和快速链接
- 自动更新在线人数（模拟数据）
- 包含社交媒体链接和版权信息

## 修改组件

### 更新导航栏

如需添加新的导航链接，编辑 `navbar.html` 文件：

```html
<li class="nav-item">
    <a class="nav-link" href="new-page.html">
        <i class="fas fa-new-icon me-1"></i>新页面
    </a>
</li>
```

### 更新页脚

如需修改页脚信息，编辑 `footer.html` 文件中的相应部分。

## 样式说明

组件使用了与网站主题一致的样式：
- 粉色主题色彩方案
- Bootstrap 5.3.2 框架
- Font Awesome 图标
- 响应式设计

## 注意事项

1. **路径问题**：确保组件加载器的路径设置正确
2. **脚本执行**：组件中的JavaScript会自动执行
3. **样式继承**：组件会继承页面的CSS样式
4. **缓存问题**：浏览器可能会缓存组件，开发时可能需要强制刷新

## 高级用法

### 条件加载组件

```javascript
// 根据条件加载不同的组件
if (userLoggedIn) {
    document.querySelector('[data-component="navbar"]')
        .setAttribute('data-component', 'navbar-logged-in');
}
loadComponents();
```

### 组件事件监听

```javascript
// 监听组件加载完成事件
document.addEventListener('DOMContentLoaded', function() {
    loadComponents().then(() => {
        // 组件加载完成后的操作
        initializePageSpecificFeatures();
    });
});
```

## 故障排除

1. **组件不显示**：检查文件路径和网络请求
2. **样式错误**：确保页面包含了必要的CSS文件
3. **脚本错误**：查看浏览器控制台的错误信息
4. **缓存问题**：尝试硬刷新页面 (Ctrl+F5)

## 扩展组件系统

要添加新组件：

1. 在 `components/` 文件夹中创建新的 `.html` 文件
2. 在页面中使用 `<div data-component="新组件名"></div>`
3. 组件会自动被加载器识别和加载