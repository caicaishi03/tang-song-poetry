// 点击外部区域关闭导航
document.addEventListener('DOMContentLoaded', () => {
    // 使用更可靠的选择器
    const nav = document.getElementById('sideNav');
    const toggleBtn = document.getElementById('navToggle');

    if (!nav || !toggleBtn) {
        console.error('关键元素缺失，请检查：', {
            navExists: !!nav,
            toggleBtnExists: !!toggleBtn
        });
        return;
    }

    // 状态管理
    let isNavOpen = false;

    // 切换函数
    const toggleNavigation = () => {
        isNavOpen = !isNavOpen;
        nav.classList.toggle('active', isNavOpen);
        toggleBtn.style.left = isNavOpen ? '240px' : '0';
    };

    // 事件绑定
    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleNavigation();
    });

    // 外部点击检测
    document.addEventListener('click', (e) => {
        if (isNavOpen && !nav.contains(e.target) && e.target !== toggleBtn) {
            toggleNavigation();
        }
    });

    // 平滑滚动
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // 移动端自动关闭
                if (window.innerWidth < 768) {
                    toggleNavigation();
                }
            } else {
                console.warn('目标区块不存在:', targetId);
            }
        });
    });

    // 窗口调整时重置状态
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && isNavOpen) {
            toggleNavigation();
        }
    });
});
// 动态显示登录状态
document.addEventListener('DOMContentLoaded', function () {
    const avatar = document.querySelector('.user-avatar');
    const statusDot = document.querySelector('.login-status');

    // 检查登录状态
    if (localStorage.getItem('token')) {
        statusDot.style.opacity = '1';
        avatar.querySelector('img').src = '../img/touxiang1.jpg'; // 使用相对路径指向头像
    }
});