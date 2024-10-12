const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
// 传入两个常量
// 监听click,点击按钮后,切换 nav 元素的 active 类。
// 如果 nav 元素已经包含 active 类，则该方法会移除它；如果不含，则会添加它
toggle.addEventListener('click', () => nav.classList.toggle('active'))
// 实现切换效果