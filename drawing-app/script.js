const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
// 引入6个元素，分别是整个画板，增减按钮、画笔size、颜色和清理按钮
// .getContext('2d')：<canvas> 元素的一个方法，用于获取画布的绘图环境，'2d'指定想要获取的类型
const ctx = canvas.getContext('2d');
// 设定默认的画笔尺寸为10
let size = 10
// isPressed判断鼠标是否被按下等
let isPressed = false
// 设定默认颜色黑色
colorEl.value = 'black'
let color = colorEl.value
let x
let y
// 添加了一系列事件监听器
// 鼠标在画板内按下时，isPressed被改为true
canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    // 记录x和y在画布上的起始坐标
    x = e.offsetX
    y = e.offsetY
})
// 鼠标被释放时，isPressed被改为false
document.addEventListener('mouseup', (e) => {
    isPressed = false
    // x 和 y 变量被设置为 undefined，表示没有当前的鼠标位置
    x = undefined
    y = undefined
})
// 监听鼠标移动事件，进行绘画操作
canvas.addEventListener('mousemove', (e) => {
    // 当isPressed为true时
    if(isPressed) {
        // x2 和 y2 变量记录当前鼠标的位置
        const x2 = e.offsetX
        const y2 = e.offsetY
        // drawCircle 函数用于在当前鼠标位置绘制一个圆形
        drawCircle(x2, y2)
        // drawLine 函数用于在上一个鼠标位置和当前鼠标位置之间绘制一条线
        drawLine(x, y, x2, y2)
        //x 和 y 变量更新为当前鼠标位置 
        x = x2
        y = y2
    }
})
// 定义函数，使用ctx.arc方法在指定的x和y坐标绘制一个圆形
function drawCircle(x, y) {
    // ctx.beginPath 开始一个新的路径
    ctx.beginPath();
    // ctx.arc 方法在指定的 x 和 y 坐标绘制一个圆形
    ctx.arc(x, y, size, 0, Math.PI * 2)
    // 设置填充颜色
    ctx.fillStyle = color
    // 填充路径，绘制圆形
    ctx.fill()
}
// 绘制线条的函数
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    // ctx.moveTo 和 ctx.lineTo 方法在两个点之间绘制一条线
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    // 设置线条颜色
    ctx.strokeStyle = color
    // 线宽
    ctx.lineWidth = size * 2
    // 绘制线条
    ctx.stroke()
}
// 更新画笔大小函数
function updateSizeOnScreen() {
    sizeEL.innerText = size
}
// 增加画笔大小的按钮事件
increaseBtn.addEventListener('click', () => {
    // 增大时，szie增加5
    size += 5
    // 设置画笔最大50
    if(size > 50) {
        size = 50
    }
    // // 更新画笔大小
    updateSizeOnScreen()
})
// 减少画笔大小的按钮
decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})
// 颜色选择事件
colorEl.addEventListener('change', (e) => color = e.target.value)
// 清除画布的按钮事件，调用ctx.clearRect方法
clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))
