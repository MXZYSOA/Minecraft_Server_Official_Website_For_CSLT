/**
 * 组件加载器 - 用于动态加载HTML组件
 * 使用方法：
 * 1. 在HTML中添加 <div data-component="navbar"></div>
 * 2. 在页面底部引入此脚本
 * 3. 调用 loadComponents() 函数
 */

class ComponentLoader {
    constructor() {
        this.componentsPath = './components/';
        this.loadedComponents = new Set();
    }

    /**
     * 加载单个组件
     * @param {string} componentName - 组件名称
     * @param {HTMLElement} targetElement - 目标元素
     */
    async loadComponent(componentName, targetElement) {
        try {
            const response = await fetch(`${this.componentsPath}${componentName}.html`);
            if (!response.ok) {
                throw new Error(`Failed to load component: ${componentName}`);
            }
            
            const html = await response.text();
            targetElement.innerHTML = html;
            
            // 执行组件中的脚本
            this.executeScripts(targetElement);
            
            this.loadedComponents.add(componentName);
            console.log(`Component loaded: ${componentName}`);
        } catch (error) {
            console.error(`Error loading component ${componentName}:`, error);
            targetElement.innerHTML = `<div class="alert alert-warning">组件加载失败: ${componentName}</div>`;
        }
    }

    /**
     * 执行组件中的脚本
     * @param {HTMLElement} container - 包含脚本的容器
     */
    executeScripts(container) {
        const scripts = container.querySelectorAll('script');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            if (script.src) {
                newScript.src = script.src;
            } else {
                newScript.textContent = script.textContent;
            }
            document.head.appendChild(newScript);
            script.remove();
        });
    }

    /**
     * 加载所有标记的组件
     */
    async loadAllComponents() {
        const componentElements = document.querySelectorAll('[data-component]');
        const loadPromises = [];

        componentElements.forEach(element => {
            const componentName = element.getAttribute('data-component');
            if (componentName) {
                loadPromises.push(this.loadComponent(componentName, element));
            }
        });

        await Promise.all(loadPromises);
        console.log('All components loaded successfully');
    }

    /**
     * 重新加载指定组件
     * @param {string} componentName - 组件名称
     */
    async reloadComponent(componentName) {
        const elements = document.querySelectorAll(`[data-component="${componentName}"]`);
        const loadPromises = [];

        elements.forEach(element => {
            loadPromises.push(this.loadComponent(componentName, element));
        });

        await Promise.all(loadPromises);
    }

    /**
     * 获取已加载的组件列表
     */
    getLoadedComponents() {
        return Array.from(this.loadedComponents);
    }
}

// 创建全局实例
window.componentLoader = new ComponentLoader();

// 便捷函数
window.loadComponents = function() {
    return window.componentLoader.loadAllComponents();
};

window.reloadComponent = function(componentName) {
    return window.componentLoader.reloadComponent(componentName);
};

// 自动加载组件（当DOM加载完成时）
document.addEventListener('DOMContentLoaded', function() {
    window.loadComponents();
});

// 导出供模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ComponentLoader;
}