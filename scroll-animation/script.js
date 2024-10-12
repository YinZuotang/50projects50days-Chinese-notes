const boxes = document.querySelectorAll('.box')
// 引入所有的box元素
// 为window添加滚动的事件监听器，调用函数
window.addEventListener('scroll', checkBoxes)

checkBoxes()
// 定义函数
function checkBoxes() {
    // 定义触发，当元素的顶部距离视口顶部的距离小于视口高度的80%时，将触发操作 
    const triggerBottom = window.innerHeight / 5 * 4
    // 迭代每一个元素
    boxes.forEach(box => {
        // 获取该元素顶部距离视口顶部的距离
        const boxTop = box.getBoundingClientRect().top
        // 如果box元素的顶部距离小于triggerBottom
        if(boxTop < triggerBottom) {
            // 展示这个box
            box.classList.add('show')
        } else {
            // 否则移除show
            box.classList.remove('show')
        }
    })
}