const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件配置
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 设置模板引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 静态文件托管
app.use(express.static(path.join(__dirname, 'public')));

// 路由配置
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

app.use('/', indexRouter);
app.use('/api', apiRouter);

// 404 处理
app.use((req, res) => {
    res.status(404).render('404', { title: '页面未找到' });
});

// 错误处理
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { 
        title: '服务器错误',
        error: process.env.NODE_ENV === 'development' ? err : {}
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`🚀 服务器运行在 http://localhost:${PORT}`);
    console.log(`📁 静态文件目录: ${path.join(__dirname, 'public')}`);
    console.log(`🎨 模板目录: ${path.join(__dirname, 'views')}`);
});

module.exports = app;