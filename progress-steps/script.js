const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
// 引入进度条、两个按钮，四个圆球
// 当前激活1个
let currentActive = 1
// next按钮添加事件监听器，点击后，激活数量+1
next.addEventListener('click', () => {
    currentActive++
    // 如果激活了4个，那么激活数量不再增
    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    // 调用函数
    update()
})
// prev添加响应的事件，点击后 激活数量减一
prev.addEventListener('click', () => {
    currentActive--
    // 如果激活了1个，那么激活数量不再减少
    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})
// 定义函数
function update() {
    // 遍历每一个圆球，参数时circle和idx
    circles.forEach((circle, idx) => {
        // 如果idx小于激活的数量，为当前的元素添加cative类名，否则溢出类名
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    // 定义 actives，获取所有被激活的元素
    const actives = document.querySelectorAll('.active')
    // 进度条的宽度等于 激活的数量-1，之后除以3，再转为百分数
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    // 激活了1个时，回退按钮不能用，激活了四个，下一步按钮禁用，否则都可以使用
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}