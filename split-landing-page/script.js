const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
// 引入三个DOM元素，并为left和right添加鼠标移入和鼠标移出事件的监听器，分别添加和移除hover-left类名
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))