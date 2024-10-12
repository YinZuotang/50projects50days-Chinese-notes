const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
// 传入两个常量，其中原先的text为一级标题样式，所以textE1是一个DOM元素，本质是H1标签
// 定义文本内容
const text = 'We Love Programming!'
// 定义idx
let idx = 1
// 定义速度变量
let speed = 300 / speedEl.value
// 调用writeText函数输出text内容
writeText()
// 定义writeText函数实现逐字打印
function writeText() {
    // innerText是DOM中的属性，用于获取或设置一个元素的文本内容
    // 使用slice方法从0到idx截取子字符串，默认直接显示前。
    textEl.innerText = text.slice(0, idx)
    // idx加1
    idx++
    // 当idx大于文本长度时，idx重置为1
    if(idx > text.length) {
        idx = 1
    }
    // 设置定时器，不停调用writeText函数，并按照speed速度显示。
    // 这里递归调用writeText函数，实现循环
    setTimeout(writeText, speed)
}

// 为speedE1添加了一个事件监听器，当在input中输入e，速度等于300/e的目标值
// input.target.value， input 是一个事件对象，它在事件被触发时由浏览器提供。
// target 属性指的是触发事件的元素，而 value 属性则是该元素当前的值。
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)