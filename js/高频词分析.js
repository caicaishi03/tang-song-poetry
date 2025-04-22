// 可选：自动滚动到底部演示
window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.hdleft2_table');
    // 自动滚动到底部（如果需要）
    container.scrollTop = container.scrollHeight;

    // 动态添加内容演示（如果需要）

    setInterval(() => {
        const ul = container.querySelector('ul');
        const newItem = document.createElement('li');
        newItem.innerHTML = `
              <p class="fl"><b>新公安局</b><br>
                  新纠纷内容...
              </p>
              <p class="fr pt17">${new Date().toLocaleDateString()}</p>
          `;
        ul.appendChild(newItem);
    }, 3000);

});
// 自动循环滚动实现
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.hdleft2_table');
    let isScrolling = true;
    let scrollPosition = 0;
    let animationFrame;

    // 滚动速度控制（像素/帧）
    const scrollSpeed = 0.8;

    // 鼠标悬停暂停
    container.addEventListener('mouseenter', () => {
        isScrolling = false;
        cancelAnimationFrame(animationFrame);
    });

    container.addEventListener('mouseleave', () => {
        isScrolling = true;
        startScrolling();
    });

    function startScrolling() {
        const maxScroll = container.scrollHeight - container.clientHeight;

        function animate() {
            if (!isScrolling) return;

            scrollPosition += scrollSpeed;

            // 到达底部后回到顶部
            if (scrollPosition >= maxScroll) {
                scrollPosition = 0;
                // 无跳转重置（克隆内容实现无缝滚动）
                resetContent();
            }

            container.scrollTop = scrollPosition;
            animationFrame = requestAnimationFrame(animate);
        }

        animate();
    }

    // 实现无缝滚动（克隆内容）
    function resetContent() {
        const ul = container.querySelector('ul');
        const items = ul.querySelectorAll('li');

        // 克隆所有列表项并追加到列表
        const clone = ul.cloneNode(true);
        container.appendChild(clone);

        // 当克隆内容滚动到可视区域时，重置位置
        setTimeout(() => {
            scrollPosition = 0;
            container.scrollTop = 0;
            ul.remove();
        }, 0);
    }

    // 初始化启动
    startScrolling();
});