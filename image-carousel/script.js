const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
// 引入DOM元素
const img = document.querySelectorAll('#imgs img')
// 引入NodeList对象
// 图片索引
let idx = 0
// 定时器，2000毫秒调用一次run函数
let interval = setInterval(run, 2000)
// run函数
function run() {
    // 索引+1
    idx++
    // 调用changeImage函数
    changeImage()
}
// changeImage函数
function changeImage() {
    // 索引大于3时，返回第一个，否则当索引小于0时，返回第4个图
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }
    // 使用索引值计算图像沿着X轴移动的距离，显示新的图
    imgs.style.transform = `translateX(${-idx * 500}px)`
}
// 重置定时器
function resetInterval() {
    clearInterval(interval)
    // 清理当前的定时器后，重新建立
    interval = setInterval(run, 2000)
}
// 点击事件的监听器，右边按钮点击一下，索引+1,执行旋转函数和重置索引函数
rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})
// 左侧按钮监听器
leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})
