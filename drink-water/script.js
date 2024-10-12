const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
// 引入四个元素
// 调用函数更新大杯子
updateBigCup()
// 为所有的小杯子列表进行迭代，添加click事件，点击后高亮小杯子
smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})
// 高亮小杯子函数
function highlightCups(idx) {
    
    // 当点击最后一个杯子，并且最后一个杯子有水时，减少一杯。但是这里没有真正的操作，只是先将索引减小
    if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
    // 当目前杯子有水并且下一个兄弟元素是空杯时，减少目前杯子的水
    // nextElementSibling 是一个JavaScript属性，它返回某个元素的下一个兄弟元素
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
     
    // 当idx2小于等于idx时，idx前面的杯子都被添加上full类名，idx后面的被移除full类名，起到了idx前面的杯子有水，后面的杯子没水的效果
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
    // 更新大杯子
    updateBigCup()
}
// 更新大杯子函数
function updateBigCup() {
    // 引入两个参数，计算被填满的小杯子的个数
    const fullCups = document.querySelectorAll('.cup-small.full').length
    // 总的杯子数，就是8
    const totalCups = smallCups.length

    // 当被填满的杯子是0时，百分比部分不可见，并且高度0
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        // 有水时，百分比部分可见，高度等于有水杯子/8*330
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        // 更新百分比部分的innerText属性，使文本的值等于有水数/8*100%
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }
    // 当8杯水时，隐藏大杯子的上半部分，否则可视化上半部分，上部分的文本值是：2-(250*有水杯子数/1000)L
    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}
