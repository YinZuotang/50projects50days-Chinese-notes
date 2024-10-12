const nums = document.querySelectorAll('.nums span')
// 这里的nums其实形成了一个列表，我修改了代码，打印出来看一下
console.log(nums)
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')
// 选择文档中的四个元素，分别选择了倒计时、倒计时容器、结束信息、重新演示的元素

// 运行动画
runAnimation()
// 打印默认运行后的nums情况
console.log(nums)

// 定义2个函数，用于动画的重置、运行、
function resetDOM() {
  // 移除hide，使counter容器可见
  counter.classList.remove('hide')
  // 先移除、不展示show定义的最终信息的样式
  finalMessage.classList.remove('show')

  // 遍历数组的方式遍历nums列表中的所有元素
  nums.forEach((num) => {
    // 设置class=""
    num.classList.value = ''
  })
  // nums列表第一个元素为3，添加class = "in"，否则无法replay再次倒计时
  nums[0].classList.add('in')
}
// 打印重置后的nums情况
console.log(nums)

// 运行数字倒计时部分的动画
function runAnimation() {
  // 遍历nums中的每一个数值和idx
  nums.forEach((num, idx) => {
    // 定义常量nextToLast等于数组长度-1
    const nextToLast = nums.length - 1
    // 每个数字添加addEventLister事件监听器
    num.addEventListener('animationend', (e) => {
      // 如果动画名为goIn且不是最后一个元素，则移除in添加out，触发退出动画。
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in')
        num.classList.add('out')
        // 如果动画名为goOut且存在下一个兄弟元素，则为下一个兄弟元素添加in类，触发进入动画。
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in')
        // 否则隐藏counter并显示finalMessage，所有动画完成
      } else {
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    })
  })
}

// 为replay按钮添加事件监听器，当用户点击replay按钮时的动作
replay.addEventListener('click', () => {
  // 调用resetDOM()函数重置DOM
  resetDOM()
  // 调用runAnimation()函数重新开始动画。
  runAnimation()
})
