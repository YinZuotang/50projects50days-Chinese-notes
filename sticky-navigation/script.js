const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)
// 获取导航元素，添加滚动的事件监听器，并定义fixNav函数
function fixNav() {
    // 如果窗口的的滚动条
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}