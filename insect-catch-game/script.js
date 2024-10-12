const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
// 首先引入了多个DOM元素
// 初始化了时间、成绩、选择的昆虫类型
let seconds = 0
let score = 0
let selected_insect = {}
// 开始游戏按钮添加事件监听器，开始游戏按钮点击后，为其所在的screens[]也就是第一个screen添加up类名
start_btn.addEventListener('click', () => screens[0].classList.add('up'))
// 迭代四个选择昆虫种类的按钮
choose_insect_btns.forEach(btn => {
    // 当某一个按钮被点击时
    btn.addEventListener('click', () => {
        // 设置在下一步屏幕中出现的昆虫的图像为当前点击的图像，获取这个图像的src和alt属性
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        // 定义选择的昆虫
        selected_insect = { src, alt }
        // 将第二个界面也使用up类将其切换掉
        screens[1].classList.add('up')
        // 添加一个计时器，在1秒后执行创建昆虫函数，之后执行开始游戏函数
        setTimeout(createInsect, 1000)
        startGame()
    })
})
// 开始游戏函数，添加计时器，在1s后执行增加事件函数
function startGame() {
    setInterval(increaseTime, 1000)
}
// 增加时间函数
function increaseTime() {
    // 定义常数m为分，秒数计数/60转浮点型
    let m = Math.floor(seconds / 60)
    // 定义s秒，为秒数计数%60取余
    let s = seconds % 60
    // 使用？在模板字符串进行条件判断，如果m<10，显示01m的格式
    m = m < 10 ? `0${m}` : m
    // 如果s<10，显示01s的格式，为了保持格式的一致，不会出现1m:1s的格式，使用01：01的格式
    s = s < 10 ? `0${s}` : s
    // 使用模板字符将内容添加到DOM元素中
    timeEl.innerHTML = `Time: ${m}:${s}`
    // 描述计数+1
    seconds++
}
// 创建一个新的昆虫元素并将其添加到游戏容器中
function createInsect() {
    // 创建一个div元素，并设置其类名为 'insect'
    const insect = document.createElement('div')
    insect.classList.add('insect')
    // 获取一个随机位置，并将昆虫元素放置在这个位置
    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    // 使用Math.random函数，使图像随机旋转
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`
// 添加一个点击事件监听器，当昆虫被点击时，会调用 catchInsect 函数。
    insect.addEventListener('click', catchInsect)
// game_container添加子元素insect
    game_container.appendChild(insect)
}
// 随机位置函数
function getRandomLocation() {
    // 先获取屏幕的宽高信息
    const width = window.innerWidth
    const height = window.innerHeight
    // 根据获取的屏幕宽高和随机函数，得到新的昆虫位置
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}
// 点击昆虫进行捕捉是，函数调用
function catchInsect() {
    // 增加成绩
    increaseScore()
    // 给被点击的昆虫添加类名caught
    this.classList.add('caught')
    // 使用 setTimeout 在2秒后从 DOM 中移除这个昆虫元素
    setTimeout(() => this.remove(), 2000)
    // 调用addInsects()函数增加昆虫
    addInsects()
}
// 增加昆虫函数
function addInsects() {
    // 在1秒和1.5秒后调用createInsect函数，在不同时间生成两个新的昆虫
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}
// 记录成绩
function increaseScore() {
    score++
    // 分数超过19，显示消息
    if(score > 19) {
        message.classList.add('visible')
    }
    // 更新页面元素 scoreEl 的内容来显示当前分数
    scoreEl.innerHTML = `Score: ${score}`
}