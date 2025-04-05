// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 返回顶部按钮
const backToTop = document.createElement('button');
backToTop.innerHTML = '↑';
backToTop.className = 'back-to-top';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 添加返回顶部按钮样式
const style = document.createElement('style');
style.textContent = `
    .back-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: none;
        opacity: 0;
        transition: opacity 0.3s;
    }

    .back-to-top.show {
        display: block;
        opacity: 1;
    }

    .back-to-top:hover {
        background: var(--secondary-color);
    }
`;
document.head.appendChild(style);

// 代码高亮
document.addEventListener('DOMContentLoaded', (event) => {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach((block) => {
        hljs.highlightBlock(block);
    });
});

// 图片点击放大
document.querySelectorAll('.post-content img').forEach(img => {
    img.addEventListener('click', function () {
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <img src="${this.src}" alt="${this.alt}">
                <span class="close">&times;</span>
            </div>
        `;
        document.body.appendChild(modal);

        modal.querySelector('.close').addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    });
});

// 添加图片模态框样式
const modalStyle = document.createElement('style');
modalStyle.textContent = `
    .image-modal {
        display: none;
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.9);
    }

    .modal-content {
        position: relative;
        margin: auto;
        padding: 20px;
        width: 80%;
        max-width: 800px;
        top: 50%;
        transform: translateY(-50%);
    }

    .modal-content img {
        width: 100%;
        height: auto;
    }

    .close {
        position: absolute;
        right: 25px;
        top: 0;
        color: #f1f1f1;
        font-size: 35px;
        font-weight: bold;
        cursor: pointer;
    }

    .close:hover {
        color: #bbb;
    }
`;
document.head.appendChild(modalStyle); 