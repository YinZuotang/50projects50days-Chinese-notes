const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')
console.log(empties)
// 引入两个元素，分别是被背景填充的容器和5个容器NodeList
// 添加两个事件监听器，分别是拖拽开始和拖拽结束事件，分别执行相关的函数
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)
// 定义对于在empties中的empty，添加了四个事件监听器，分别执行相关的函数
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}
// dragstart 事件在用户开始拖动元素或被选择的文本时调用。
function dragStart() {
    // 拖拽开始时，当前的empty的末尾添加hold
    this.className += ' hold' 
    // 定时器0秒，立即执行箭头函数
    // 箭头函数定义了一个匿名函数，将当前上下文（由 this 关键字引用）的 className 属性设置为 'invisible'，也就是被移出的classname从fill改成了invisible
    setTimeout(() => this.className = 'invisible', 0)
}
// 移入的class=fill
function dragEnd() {
    this.className = 'fill'
}
// 放置目标不执行默认的行动
function dragOver(e) {
    e.preventDefault()
}
// 被选择的不执行默认的行动，且class添加hovered
function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}
// 离开被放入的容器时，他的class改为empty
function dragLeave() {
    this.className = 'empty'
}
// 在元素被放置到有效的放置目标上时触发,class恢复默认的empty，被拖拽的在拖拽过程中class改成了invisible再改回fill
function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}