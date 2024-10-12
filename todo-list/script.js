const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')
// 三个DOM元素
// 解析之前创建的todos
const todos = JSON.parse(localStorage.getItem('todos'))
// 如果之前创建过todos，则迭代循环添加每一个todo
if(todos) {
    todos.forEach(todo => addTodo(todo))
}
// 提交的事件监听器
form.addEventListener('submit', (e) => {
    // preventDefault () 方法可以取消可取消的事件，阻止其默认操作发生
    e.preventDefault()

    addTodo()
})
// 添加todo函数
function addTodo(todo) {
    // 定义todo的文本为输入的值
    let todoText = input.value
    // 如果todo已经存在,那么todoText等于todo.text
    if(todo) {
        todoText = todo.text
    }
    // 如果有待办文本，则继续处理
    if(todoText) {
        // // 创建一个新的列表项单元格元素
        const todoEl = document.createElement('li')
        // 如果传入的todo对象有completed属性，则添加completed类
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }
        // 设置列表项的文本内容
        todoEl.innerText = todoText
        // 为列表项添加点击事件监听器，用于切换completed类
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            // 更新本地存储
            updateLS()
        }) 
        // 列表项添加右键菜单事件监听器，用于删除元素并更新本地存储
        todoEl.addEventListener('contextmenu', (e) => {
            // 阻止默认的右键菜单
            e.preventDefault()

            todoEl.remove()
            updateLS()
        }) 
         // 将新创建的列表项添加到待办事项列表中
        todosUL.appendChild(todoEl)
        // 清空输入框的值
        input.value = ''
        // 更新本地存储
        updateLS()
    }
}
// 更新本地存储函数
function updateLS() {
    // 获取所有的单元格
    todosEl = document.querySelectorAll('li')
    //创建一个空数组来存储待办事项数据
    const todos = []
    // 迭代每一个todo元素
    todosEl.forEach(todoEl => {
        // 将每个待办事项的文本和完成状态添加到todos数组中
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })
    // 本地存储localStorage,将todos数组转换为JSON字符串并存储到本地存储的'todos'键中
    localStorage.setItem('todos', JSON.stringify(todos))
}