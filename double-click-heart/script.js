const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')
// .querySelector引入两个dom元素，第一个名为.loveMe的类，第一个ID名为#times的元素
// 初始化点击的时间、比心的次数
let clickTime = 0
let timesClicked = 0
// 为loveMe添加事件监听器，监听click
loveMe.addEventListener('click', (e) => {
    // 点击次数为0时，获取当前点击的时间
    if(clickTime === 0) {
        // new Date() 创建一个新的 Date 对象，代表当前的日期和时间
        // .getTime() 方法返回这个 Date 对象的时间戳，即自 1970 年 1 月 1 日以来经过的毫秒数
        clickTime = new Date().getTime()
    } else {
        // 否则的话，如果当前时间减到上次点击事件小于800毫秒，判断是否双击
        if((new Date().getTime() - clickTime) < 800) {
            // 如果是双击就执行creatHeart函数，之后clickTime重置为0
            createHeart(e)
            clickTime = 0
        } else {
            // 否则 clickTime等于当前事件戳
            clickTime = new Date().getTime()
        }
    }
})
// 创建心函数
const createHeart = (e) => {
    // 创建一个新的dom元素，这个元素里面是心形的字符图标
    const heart = document.createElement('i')
    // 为这个新的i标签添加两个类名
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    // 点击的横纵坐标，这个坐标相对于浏览器
    const x = e.clientX
    const y = e.clientY
    // loveMe这个被点击的目标元素相对于浏览器窗口的偏移量
    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop
    // 心形的位置相对于loveMe容器的坐标值
    const xInside = x - leftOffset
    const yInside = y - topOffset
    // 设置heart的样式中的距离父元素也就是距离loveMe顶部和左边的距离
    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`
    // 将heart添加到loveMe的子类，也就是让heart出现在loveMe中，位置也是相对于loveMe
    loveMe.appendChild(heart)
    // 比心的次数加一
    times.innerHTML = ++timesClicked
    // 执行结束1s后，移除heart元素，再次点击时重新创建heart
    setTimeout(() => heart.remove(), 1000)
}