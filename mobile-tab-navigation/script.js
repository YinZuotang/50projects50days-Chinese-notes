const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')
// 引入四个图片和导航栏单元格，生成2个nodelist元素
// 迭代每一个单元格和索引
listItems.forEach((item, idx) => {
    // 监听单元格被点击的事件
    item.addEventListener('click', () => {
        // 被点击，执行两个函数
        hideAllContents()
        hideAllItems()
        // 在单元格类名中添加active
        item.classList.add('active')
        // 对应的图片class中添加show
        contents[idx].classList.add('show')
    })
})
// 隐藏所有的内容，将每一个图片 class中移除show
function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}

// 将所有的单元格移除 active
function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}