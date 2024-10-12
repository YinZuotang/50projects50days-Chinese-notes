const button = document.getElementById('button')
const toasts = document.getElementById('toasts')
// 获取两个dom元素
// 自定义信息，一个列表
const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]
// 定义types，一个列表
const types = ['info', 'success', 'error']
// 按钮点击事件监听器
button.addEventListener('click', () => createNotification())
// 创建通知函数，message和 type都是默认值null
function createNotification(message = null, type = null) {
    // 创建notif元素 div容器
    const notif = document.createElement('div')
    // 类名添加toast
    notif.classList.add('toast')
    // 如果type参数有值，则添加该类型，否则从type中随机获取一个
    notif.classList.add(type ? type : getRandomType())
    // 如果message参数有值，则设置为该消息，否则设置为随机消息
    notif.innerText = message ? message : getRandomMessage()
    // 将新创建的通知元素添加到页面上的toasts容器中
    toasts.appendChild(notif)
    // 定时器，三秒就移除
    setTimeout(() => {
        notif.remove()
    }, 3000)
}
// 随机消息和随机类型函数
function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}