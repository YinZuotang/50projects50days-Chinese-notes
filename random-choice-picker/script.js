const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')
// 获取标签和文本区域
// textarea.focus()方法，将焦点设置在textarea元素上,使其可以选择和可编辑
textarea.focus()
// 添加键盘输入事件监听
textarea.addEventListener('keyup', (e) => {
    // 使用输入的字符创建tag
    createTags(e.target.value)
    // 回车之后,执行定时器,当前的元素是空,10毫秒后执行随机选择
    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})
// 创建tag
function createTags(input) {
    // 定义tag,使用逗号分隔输入,筛选输入不等于空的,遍历每一个tag,并且使用trim()方法在JavaScript中删除字符串两端的空白字符
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    // tags初始为空,无子类等
    tagsEl.innerHTML = ''
    // 遍历每一个tag,创建span,其类名为tag,内容为tag对应的内容,将其添加到tags作为其子类
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}
// 随机选择
function randomSelect() {
    // 执行30次
    const times = 30
    // 设置定时,100毫秒一次,不停执行
    const interval = setInterval(() => {
        // 执行pickRandomtag函数, 
        const randomTag = pickRandomTag()
	// 如何randomTag不是未被定义的,那就高亮这个randomTag
	if (randomTag !== undefined) {
        highlightTag(randomTag)
        // 设置定时器,100毫秒执行一次,取消高亮
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
	}
    }, 100);
// 定时器,执行一次
    setTimeout(() => {
        // 取消定时
        clearInterval(interval)
        // 实行一次,高亮最后被匹配的tag
        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

function pickRandomTag() {
    // 选择页面上所有具有 .tag 类的元素
    const tags = document.querySelectorAll('.tag')
    // 使用随机函数,获取tags列表中的某一个
    return tags[Math.floor(Math.random() * tags.length)]
}
// 类名添加高亮
function highlightTag(tag) {
    tag.classList.add('highlight')
}
// 类名移除高亮
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
