const container = document.querySelector('.container')
// const unsplashURL = 'https://source.unsplash.com/random/'
// 原地址不能使用，修改了地址，但 仍需科学上网
const unsplashURL = 'https://picsum.photos/'
// 5行图
const rows = 5
// 迭代获取图片,一行三个,创建img元素,元素的链接通过模板字符串和调用函数获取
for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    // 图片作为子类添加到容器中
    container.appendChild(img)
}
// 随机的尺寸,
function getRandomSize() {
    // return `${getRandomNr()}x${getRandomNr()}`
    // 新的地址使用新的方式进行宽高设置
    return `${getRandomNr()}/${getRandomNr()}`
}
// 随机数,300-310尺寸
function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}