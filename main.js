// 基本DOM操作示例

// 1. 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成！');
    
    // 2. 获取元素并修改内容
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.innerHTML += '<p>这是通过JavaScript动态添加的内容。</p>';
    }
    
    // 3. 事件监听器示例
    const contactButton = document.getElementById('contactButton');
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            alert('感谢您点击按钮！');
        });
    }
    
    // 4. 动态创建并添加元素
    const projectsContainer = document.getElementById('projects');
    if (projectsContainer) {
        // 创建一些示例项目
        const projects = [
            { title: '项目一', description: '这是一个示例项目' },
            { title: '项目二', description: '这是另一个示例项目' },
            { title: '项目三', description: '这是第三个示例项目' }
        ];
        
        projects.forEach((project, index) => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project';
            projectElement.innerHTML = `
                <img src="images/project${index + 1}.jpg" alt="${project.title}" class="project-image">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            projectsContainer.appendChild(projectElement);
        });
    }
    
    // 5. 修改样式示例
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.style.backgroundColor = '#f0f8ff';
        aboutSection.style.borderLeft = '4px solid #333';
        aboutSection.style.paddingLeft = '1rem';
    }
});

// 6. 窗口滚动事件示例
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#222';
    } else {
        header.style.backgroundColor = '#333';
    }
});

// 7. 表单处理示例（如果有表单的话）
function handleSubmit(event) {
    event.preventDefault();
    console.log('表单提交被拦截');
    // 这里可以添加表单验证和处理逻辑
}