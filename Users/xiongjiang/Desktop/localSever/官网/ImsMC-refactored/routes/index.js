const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// 首页
router.get('/', (req, res) => {
    res.render('index', { 
        title: '创世乐土服务器 | 官方网站',
        page: 'home'
    });
});

// 新手指引
router.get('/guide', (req, res) => {
    res.render('guide', { 
        title: '新手引导 - 创世乐土服务器',
        page: 'guide'
    });
});

// 排行榜
router.get('/rankings', (req, res) => {
    res.render('rankings', { 
        title: '排行榜 - 创世乐土服务器',
        page: 'rankings'
    });
});

// 赞助页面
router.get('/sponsor', (req, res) => {
    res.render('sponsor', { 
        title: '赞助支持 - 创世乐土服务器',
        page: 'sponsor'
    });
});

// 生存服务器
router.get('/survival-server', (req, res) => {
    res.render('survival-server', { 
        title: '生存服务器 - 创世乐土服务器',
        page: 'survival'
    });
});

// 空岛服务器
router.get('/skyblock-server', (req, res) => {
    res.render('skyblock-server', { 
        title: '空岛服务器 - 创世乐土服务器',
        page: 'skyblock'
    });
});

// 功能特色
router.get('/features', (req, res) => {
    res.render('features', { 
        title: '功能特色 - 创世乐土服务器',
        page: 'features'
    });
});

// 常见问题
router.get('/faq', (req, res) => {
    res.render('faq', { 
        title: '常见问题 - 创世乐土服务器',
        page: 'faq'
    });
});

// 团队介绍
router.get('/team', (req, res) => {
    res.render('team', { 
        title: '团队介绍 - 创世乐土服务器',
        page: 'team'
    });
});

// 图片展示
router.get('/gallery', (req, res) => {
    res.render('gallery', { 
        title: '图片展示 - 创世乐土服务器',
        page: 'gallery'
    });
});

module.exports = router;