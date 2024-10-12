const labels = document.querySelectorAll('.form-control label')
// 引入元素
// 遍历每一个label
labels.forEach(label => {
    // 设置label元素的innerHTML属性，将其内容替换为新的HTML结构，也就是更新为HTML中类似于被注释代码
    label.innerHTML = label.innerText
    // 将label的文本按照字符进行分割，获得一个字符数组
        .split('')
        // 遍历字符数组中的每一个字符，按照模板字符串进行设置
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        // 将字符串拼接起来再
        .join('')
})