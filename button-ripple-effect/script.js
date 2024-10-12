const buttons = document.querySelectorAll('.ripple')
// .querySelectorAll从文档中选择按钮，返回的是一个 NodeList 对象，
// 遍历每一个按钮，为按钮添加click的事件监听器
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // 获取点击事件的全局x和y坐标
        const x = e.pageX
        const y = e.pageY

        // 获取被点击按钮的顶部和左侧偏移量，这里就是相对于网页了
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // 计算得到点击位置相对于按钮元素内部的坐标。
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        // 创建一个新的span圆形
        const circle = document.createElement('span')
        // 给新建的circle元素添加一个类名
        circle.classList.add('circle')
        // 设置圆形元素的位置，使其位于鼠标点击的位置
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        // 将圆形元素添加到被点击的按钮元素中，相关样式匹配css文件中的button .circle
        this.appendChild(circle)

        // 设置一个定时器，500毫秒后移除圆形元素
        setTimeout(() => circle.remove(), 500)
    })
})