const range = document.getElementById('range')
// 使用箭头函数作为事件处理器，移动滑块时触发input事件，执行代码对触发事件的参数e等进行设置
range.addEventListener('input', (e) => {
    // 获取滑块的当前值，并使用一元运算符+将其转换为数字类型
    const value = +e.target.value
    // 获取滑块元素的下一个兄弟元素，这里是显示滑块值的标签
    const label = e.target.nextElementSibling
    // getComputedStyle函数获取滑块的实际样式，并获取其宽度
    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    // getComputedStyle函数获取标签的实际样式，并获取其宽度
    const label_width = getComputedStyle(label).getPropertyValue('width')
    // 从滑块的宽度中提取数字部分（就是不包含px两个字符），并转换为数字类型,也就是300
    const num_width = +range_width.substring(0, range_width.length - 2)
    // 从标签的宽度中提取数字部分，并转换为数字类型，也就是80
    const num_label_width = +label_width.substring(0, label_width.length - 2)
    // 获取滑块的最大值和最小值，并转换为数字类型。
    const max = +e.target.max
    const min = +e.target.min
    // 计算标签新位置，修改label标签的left属性
    // 例如value为40，left = 40*300/100-80/2+2
    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)
    // 设置标签的left样式属性，使其根据计算出的left值移动
    label.style.left = `${left}px`

    // 更新label标签的内部HTML，显示当前滑块的值，也就是将50改为了40
    label.innerHTML = value
})

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// 将值从一个范围映射到另一个范围
// num为40时，（40-0）*（-10-10）/100+10=2
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }