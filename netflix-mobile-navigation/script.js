const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')
// 引入两个DOM元素分别是打开和关闭按钮，一个nav的列表
// 开启按钮添加点击事件监听器
open_btn.addEventListener('click', () => {
    // 为nav添加visible
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})
// 开启按钮添加点击事件监听器，移除visible
close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})