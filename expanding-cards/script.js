const panels = document.querySelectorAll('.panel')
// 引入所有的.panel元素
// 遍历每一个panel
panels.forEach(panel => {
    // 为panel添加click事件监听器，先执行removeActiveClasses函数
    panel.addEventListener('click', () => {
        removeActiveClasses()
        // 移除后，在被点击的函数clsss添加active
        panel.classList.add('active')
    })
})
// 为所有的panel移除active
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}