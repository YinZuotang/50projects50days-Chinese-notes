const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
// 引入三个DOM元素
// click事件的监听
btn.addEventListener('click', () => {
    // 切换search这个DOM元素的active类。如果search元素已经有了active类，那么这个类会被移除；如果没有，那么这个类会被添加。
    search.classList.toggle('active')
    // 让input这个DOM元素获得焦点，让输入框准备好接收键盘输入
    input.focus()
})