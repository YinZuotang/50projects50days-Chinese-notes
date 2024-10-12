const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')
// 引入dom元素，时分秒，时间，日期，切换按钮
// 初始化一周的时间列表
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// 初始化月份列表
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// 为toggle添加click事件监听器
toggle.addEventListener('click', (e) => {
    // 引入网页的内容
    const html = document.querySelector('html')
    // 如果类列表里面有dark,则移除dark，修改文本为dark mode
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        // 否则添加dark，修改文本为light mode
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})
// 设置事件的函数
function setTime() {
    // 定义新的time，获取当前的事件
    const time = new Date();
    // 从time中获取月份，星期，时期，小时，分钟，秒
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    // 如果大于等于13，小时/12取余
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    // 如果大于等于12，则pm,否则am
    const ampm = hours >= 12 ? 'PM' : 'AM'
    // 通过时分秒来计算角度，使用scale计算，旋转三个指针
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`
    // 模板字符串，生成事件信息，添加在钟表盘下面
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// 定义scale函数，进行数值的缩放，把时间缩放到度数
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)
