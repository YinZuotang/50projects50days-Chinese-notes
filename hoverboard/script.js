const container = document.getElementById('container')
// 引入一个DOM元素,初始化颜色和小方块个数
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500
// 循环每一个方块,创建新的div元素(小的方块)
for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    // 添加类名square
    square.classList.add('square')
    // 为每个方块添加一个事件监听器，当鼠标悬停在方块上时，调用setColor函数来改变方块的颜色
    square.addEventListener('mouseover', () => setColor(square))
    // 为每个方块添加另一个事件监听器，当鼠标离开方块时，调用removeColor函数来恢复方块的原始颜色
    square.addEventListener('mouseout', () => removeColor(square))
    // 将创建的方块添加到一个名为container的DOM元素中
    container.appendChild(square)
}
// 设置颜色函数
function setColor(element) {
    // 调用函数获取随机颜色
   const color = getRandomColor()
//    设置DOM元素的背景色为获取的颜色
   element.style.background = color
//    设置阴影效果
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
// 移除颜色
function removeColor(element) {
    // 恢复为body的背景色
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}
// 从预先定义的颜色列表中获取一个颜色
function getRandomColor() {
    // 使用Math对象,Math.random()返回0-1随机数,乘以colors.length,得到一个从0开始，但不超过数组长度的随机数
    // Math.floor()函数将得到的随机数向下取整，得到一个从0到colors.length - 1的整数。这个整数用作颜色的索引
    return colors[Math.floor(Math.random() * colors.length)]
}