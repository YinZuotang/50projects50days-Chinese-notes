const toggles = document.querySelectorAll('.faq-toggle')
// 引入元素
// 遍历每个toggle，为toggle添加click事件监听器，点击后会在class中添加cative类型
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})