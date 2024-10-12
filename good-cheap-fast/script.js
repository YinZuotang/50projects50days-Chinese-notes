const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')
// 引入一个nodelist对象和三个DOM元素,分别引入所有具有 class="toggle" 的复选框元素和三个单独的元素
// 迭代每一个toggle,创建change事件监听器,执行doTheTrick函数
toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))
// doTheTrick函数
function doTheTrick(theClickedOne) {
    // 检查是否所有三个复选框都被选中,用户想选择三个复选框时，则根据哪个复选框被点击，取消选中另一个复选框。
    if(good.checked && cheap.checked && fast.checked) {
        // 选中 good 复选框时，如果cheap和fast已经被选中，那么 fast 将被自动取消选中
        if(good === theClickedOne) {
            fast.checked = false
        }
        // 选中 cheap 复选框时，如果cheap和good已经被选中，那么good将被自动取消选中
        if(cheap === theClickedOne) {
            good.checked = false
        }
        // 选中 fast 复选框时，如果cheap和fast已经被选中，那么cheap将被自动取消选中
        if(fast === theClickedOne) {
            cheap.checked = false
        }
    }
}