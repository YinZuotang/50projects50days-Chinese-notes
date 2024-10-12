const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
// 引入四个html元素，构建了一个nodelist对象和三个普通的元素
// 初始化selectedRating是满意的
let selectedRating = 'Satisfied'
// 添加click事件监听器，进行满意度调查或者评分的效果等
ratingsContainer.addEventListener('click', (e) => {
    //  e.target 用于确定哪个元素触发了事件
    // 如果是点击的元素的父元素class中有rating，并且存在下一个兄弟元素
    if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
        // 点击的说图片时，移除active
        removeActive()
        // 被点击的元素添加active
        e.target.parentNode.classList.add('active')
        // 获取e元素的相邻元素节点的内部 HTML 内容。
        selectedRating = e.target.nextElementSibling.innerHTML
    } else if(
        // 当e元素的父元素的class包含rating并且存在前一个兄弟节点且前一个兄弟节点的元素名称是img时
        e.target.parentNode.classList.contains('rating') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ) {
        // 点击的是图片下面的文字时，移除active
        removeActive()
        // e的父元素class中添加active
        e.target.parentNode.classList.add('active')
        // 获取e元素的内部 HTML 内容。
        selectedRating = e.target.innerHTML
    }

})
// 点击提交按钮时，执行函数，在panel中使用模板字符串添加元素，并且传入selectedRating内容，也就是传递图片下面的文本内容
sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})
// 移除active函数，为三个ratings都移除active
function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}
