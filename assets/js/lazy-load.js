// 图片懒加载脚本
(function() {
    'use strict';

    // 创建占位符图片 (1x1 透明像素)
    const placeholderSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InRyYW5zcGFyZW50Ii8+PC9zdmc+';

    // 初始化懒加载
    function initLazyLoad() {
        // 检查浏览器是否支持 Intersection Observer
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        loadImage(img);
                        observer.unobserve(img);
                    }
                });
            }, lazyLoadConfig);

            // 观察所有需要懒加载的图片
            const lazyImages = document.querySelectorAll('img[data-src], img:not([data-lazy-processed])');
            lazyImages.forEach(function(img) {
                setupLazyImage(img);
                imageObserver.observe(img);
            });
        } else {
            // 降级处理：直接加载所有图片
            const images = document.querySelectorAll('img');
            images.forEach(function(img) {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
            });
        }
    }

    // 设置懒加载图片
    function setupLazyImage(img) {
        if (img.dataset.lazyProcessed) return;
        
        // 如果图片还没有 data-src 属性，将 src 移动到 data-src
        if (!img.dataset.src && img.src && !img.src.startsWith('data:')) {
            img.dataset.src = img.src;
            img.src = placeholderSrc;
        }
        
        // 添加加载样式
        img.classList.add('lazy-loading');
        img.dataset.lazyProcessed = 'true';
        
        // 添加加载失败处理
        img.onerror = function() {
            this.classList.add('lazy-error');
            this.classList.remove('lazy-loading');
        };
    }

    // 加载图片
    function loadImage(img) {
        if (!img.dataset.src) return;
        
        const tempImg = new Image();
        tempImg.onload = function() {
            img.src = img.dataset.src;
            img.classList.remove('lazy-loading');
            img.classList.add('lazy-loaded');
            
            // 添加淡入效果
            setTimeout(function() {
                img.style.opacity = '1';
            }, 50);
        };
        
        tempImg.onerror = function() {
            img.classList.add('lazy-error');
            img.classList.remove('lazy-loading');
        };
        
        tempImg.src = img.dataset.src;
    }

    // 修复白底白字问题
    function fixContrastIssues() {
        // 检查并修复可能的对比度问题
        const problematicElements = document.querySelectorAll('.guide-section, .tier-card, .faq-item, .testimonial-item');
        
        problematicElements.forEach(function(element) {
            const computedStyle = window.getComputedStyle(element);
            const bgColor = computedStyle.backgroundColor;
            const textColor = computedStyle.color;
            
            // 检查是否是白底白字
            if (isLightColor(bgColor) && isLightColor(textColor)) {
                element.classList.add('contrast-fixed');
            }
        });
    }

    // 判断颜色是否为浅色
    function isLightColor(color) {
        if (!color || color === 'transparent') return false;
        
        // 处理 rgb/rgba 颜色
        const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (rgbMatch) {
            const r = parseInt(rgbMatch[1]);
            const g = parseInt(rgbMatch[2]);
            const b = parseInt(rgbMatch[3]);
            
            // 计算亮度 (使用相对亮度公式)
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            return brightness > 200;
        }
        
        // 处理十六进制颜色
        if (color.includes('#fff') || color.includes('#ffffff') || color.includes('white')) {
            return true;
        }
        
        return false;
    }

    // 添加样式
    function addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* 懒加载样式 */
            .lazy-loading {
                opacity: 0.3;
                background-color: #f8f9fa;
                transition: opacity 0.3s ease;
            }
            
            .lazy-loaded {
                opacity: 1;
                transition: opacity 0.3s ease;
            }
            
            .lazy-error {
                opacity: 0.5;
                background-color: #f8d7da;
                position: relative;
            }
            
            .lazy-error::after {
                content: "图片加载失败";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #721c24;
                font-size: 12px;
                background-color: rgba(248, 215, 218, 0.9);
                padding: 4px 8px;
                border-radius: 4px;
                white-space: nowrap;
            }
            
            /* 对比度修复样式 */
            .contrast-fixed {
                color: #333 !important;
                background-color: #ffffff !important;
            }
            
            .contrast-fixed h1,
            .contrast-fixed h2,
            .contrast-fixed h3,
            .contrast-fixed h4,
            .contrast-fixed h5,
            .contrast-fixed h6 {
                color: #2c3e50 !important;
            }
            
            .contrast-fixed p,
            .contrast-fixed li,
            .contrast-fixed span {
                color: #555 !important;
            }
            
            .contrast-fixed a {
                color: #007bff !important;
            }
            
            .contrast-fixed a:hover {
                color: #0056b3 !important;
            }
            
            /* 特殊元素的对比度修复 */
            .guide-nav a {
                color: #495057 !important;
                background-color: #ffffff !important;
            }
            
            .guide-nav a:hover,
            .guide-nav a.active {
                color: #ffffff !important;
                background-color: #9bf1ff !important;
            }
            
            .tier-card {
                background-color: #ffffff !important;
                color: #333 !important;
            }
            
            .tier-card .tier-name {
                color: inherit !important;
            }
            
            .tier-card .tier-price {
                color: inherit !important;
            }
            
            .tier-card .benefits-list li {
                color: #555 !important;
            }
            
            .faq-item {
                background-color: #ffffff !important;
                color: #333 !important;
            }
            
            .faq-question {
                color: #2c3e50 !important;
            }
            
            .faq-answer {
                color: #555 !important;
            }
            
            /* 响应式图片优化 */
            img {
                max-width: 100%;
                height: auto;
                display: block;
            }
            
            .image.fit img,
            .image.main img {
                width: 100%;
                height: auto;
                object-fit: cover;
            }
            
            /* 图片容器优化 */
            .image {
                position: relative;
                overflow: hidden;
            }
            
            .image img {
                transition: transform 0.3s ease;
            }
            
            .image:hover img {
                transform: scale(1.05);
            }
            
            /* 移动端优化 */
            @media (max-width: 768px) {
                .lazy-error::after {
                    font-size: 10px;
                    padding: 2px 4px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // 初始化函数
    function init() {
        addStyles();
        initLazyLoad();
        fixContrastIssues();
        
        // 监听动态内容变化
        if ('MutationObserver' in window) {
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach(function(node) {
                            if (node.nodeType === 1) { // Element node
                                const images = node.querySelectorAll ? node.querySelectorAll('img') : [];
                                images.forEach(function(img) {
                                    if (!img.dataset.lazyProcessed) {
                                        setupLazyImage(img);
                                        if ('IntersectionObserver' in window) {
                                            imageObserver.observe(img);
                                        } else {
                                            loadImage(img);
                                        }
                                    }
                                });
                            }
                        });
                    }
                });
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
    }

    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // 导出到全局作用域（用于调试）
    window.LazyLoadOptimizer = {
        init: init,
        loadImage: loadImage,
        fixContrastIssues: fixContrastIssues
    };

})();