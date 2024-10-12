const codes = document.querySelectorAll('.code')
// 获取所有的验证码
// 第一个框默认被聚焦
codes[0].focus()
// 迭代每一个验证码
codes.forEach((code, idx) => {
    // 添加键入事件监听器
    code.addEventListener('keydown', (e) => {
        // 如果键入的值大于等于0且小于等于9
        if(e.key >= 0 && e.key <=9) {
            //  清空当前输入框的值
            codes[idx].value = ''
            // 等待10毫秒后，将焦点移动到下一个输入框
            setTimeout(() => codes[idx + 1].focus(), 10)
        } else if(e.key === 'Backspace') {
            // 果按下的是退格键（Backspace） 等待10毫秒后，将焦点移动到上一个输入框
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})