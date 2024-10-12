const counters = document.querySelectorAll('.counter')
// 引入NodeList，包含三个DOM元素
// 迭代每一个元素
counters.forEach(counter => {
    // 使用.innerText 初始化计数，从0开始，增加到目标值。这里的.innerText 用来获取或者设置DOM元素的文本内容
    counter.innerText = '0'
    // 定义箭头函数，更新计数器的值
    const updateCounter = () => {
        // 获取计数器的属性data-target来定义目标值
        const target = +counter.getAttribute('data-target')
        // 获取计数器当前的文本内容，并将其转换为数字
        const c = +counter.innerText
        // 定义每次更新时计数器应该增加的量，所以程序一次增加多个用户，确保推特、油管、脸书三个容器都同时结束增加
        const increment = target / 200
       
        if(c < target) {
            //  当前值小于目标值，将计数器的文本内容更新为当前值加上增量（使用 Math.ceil 函数向上取整）
            counter.innerText = `${Math.ceil(c + increment)}`
            // 设置延时1 毫秒，再次调用 updateCounter 函数，以递归方式继续更新计数器的值
            setTimeout(updateCounter, 1)
        } else {
            // 计数器的文本内容直接设置为目标值
            counter.innerText = target
        }
    }
    // 调用 updateCounter 函数，开始更新计数器的值
    updateCounter()
})