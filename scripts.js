// 加载并显示页面内容
function loadContent(page) {
    // 动态加载HTML内容
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
            // 更新导航链接的活动状态
            setActiveLink(page);
        })
        .catch(error => console.error('Error loading the content:', error));
}

// 设置活动导航链接
function setActiveLink(page) {
    // 移除所有导航链接的活动状态
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        // 根据当前页面移除或添加活动状态
        if(link.getAttribute('onclick').includes(page)) {
            link.classList.add('active');
        }
    });
}

// 切换导航栏显示
function toggleNav() {
    // 切换侧滑菜单的显示状态
    const navLinks = document.getElementById('nav-links');
    const isNavOpen = navLinks.style.display === 'block';
    navLinks.style.display = isNavOpen ? 'none' : 'block';
}

// 页面加载完成时，默认加载首页内容
document.addEventListener('DOMContentLoaded', function() {
    loadContent('home.html');
});

// 监听窗口大小变化，调整导航栏样式
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        // 在小屏幕上隐藏导航链接
        document.getElementById('nav-links').style.display = 'none';
    } else {
        // 在大屏幕上显示导航链接
        document.getElementById('nav-links').style.display = 'flex';
    }
});