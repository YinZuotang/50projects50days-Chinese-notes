const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
// 引入三个元素
// 为两个按钮添加事件监听器，分别是打开按钮和关闭按钮，使他们的类名中有/无show-nav，旋转可见/不可见
open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))