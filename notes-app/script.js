const addBtn = document.getElementById('add')
// 引入DOM元素，add按钮列表
//从localStorage获取名为notes的数据项，并将其解析为JavaScript对象。
// 这里是指从localStorage看一下是否有之前创建的笔记
const notes = JSON.parse(localStorage.getItem('notes'))
// 如果从 localStorage 中获取到了笔记数据，遍历这些数据并调用addNewNote函数来创建新的笔记元素。
// 如果有之前创建的笔记，重新打开网页，再加载回来。
if(notes) {
    notes.forEach(note => addNewNote(note))
}
// 为点击按钮添加事件监听器，执行新增notes函数
addBtn.addEventListener('click', () => addNewNote())
// addNewNote函数，使用text 参数初始化文本内容
function addNewNote(text = '') {
    // 初始化创建一个div元素
    const note = document.createElement('div')
    // 创建的元素class = note
    note.classList.add('note')
    // 模板字符串，为note添加工具栏按钮和主要文本内容区域
    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    // 工具栏的编辑按钮
    const editBtn = note.querySelector('.edit')
    // 工具栏删除按钮
    const deleteBtn = note.querySelector('.delete')
    // 笔记的main
    const main = note.querySelector('.main')
    // 笔记的文本区域
    const textArea = note.querySelector('textarea')
    // 文本区域的值等于输入的ttext参数
    textArea.value = text
    // 调用JS库，MD文档转为HTML并更新元素
    main.innerHTML = marked(text)
    // 删除按钮添加click监听，DOM中的note移除
    deleteBtn.addEventListener('click', () => {
        note.remove()
        // 更新LS
        updateLS()
    })
// 编辑按钮添加点击事件的监听
    editBtn.addEventListener('click', () => {
        // main和textArea类名如果有hidden，则移除；如果没有则添加
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })
// 文本区域添加事件监听
    textArea.addEventListener('input', (e) => {
        // 定义 值等于输入的元素内容
        const { value } = e.target
        // 将值转为HTML
        main.innerHTML = marked(value)
// 更新LS函数
        updateLS()
    })
// 为body添加子类 note
    document.body.appendChild(note)
}
// 更新LS函数
function updateLS() {
    // 定义笔记的文本内容，获取所有textarea元素
    const notesText = document.querySelectorAll('textarea')
    // 初始化notes
    const notes = []
    // 遍历notesText集合中的每个<textarea>元素，并执行函数
    // 将每个<textarea>的value属性（用户输入的文本）添加到名为notes的数组中
    // .push将元素添加到数组的末尾
    notesText.forEach(note => notes.push(note.value))
    // 将名为notes的数组存储到浏览器的本地存储（localStorage）中
    // localStorage是一个允许网页存储数据在用户浏览器上的对象，浏览器关闭后数据不会情况
    localStorage.setItem('notes', JSON.stringify(notes))
}