const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// 读取JSON数据的辅助函数
const readJsonFile = (filename) => {
    try {
        const filePath = path.join(__dirname, '../data', filename);
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`读取文件 ${filename} 失败:`, error);
        return null;
    }
};

// 新手指引数据
router.get('/guide', (req, res) => {
    const guideData = readJsonFile('guide.json');
    if (guideData) {
        res.json({
            success: true,
            data: guideData
        });
    } else {
        res.status(500).json({
            success: false,
            message: '无法加载新手指引数据'
        });
    }
});

// 排行榜数据
router.get('/rankings', (req, res) => {
    const rankingsData = readJsonFile('rankings.json');
    if (rankingsData) {
        res.json({
            success: true,
            data: rankingsData
        });
    } else {
        res.status(500).json({
            success: false,
            message: '无法加载排行榜数据'
        });
    }
});

// 赞助数据
router.get('/sponsor', (req, res) => {
    const sponsorData = readJsonFile('sponsor.json');
    if (sponsorData) {
        res.json({
            success: true,
            data: sponsorData
        });
    } else {
        res.status(500).json({
            success: false,
            message: '无法加载赞助数据'
        });
    }
});

// 服务器状态API（示例）
router.get('/server-status', (req, res) => {
    // 这里可以集成真实的服务器状态检查
    res.json({
        success: true,
        data: {
            online: true,
            players: {
                current: 42,
                max: 100
            },
            version: '1.20.1',
            motd: '欢迎来到创世乐土服务器！',
            lastUpdate: new Date().toISOString()
        }
    });
});

// 健康检查
router.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

module.exports = router;