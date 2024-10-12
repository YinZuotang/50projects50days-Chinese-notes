const password = document.getElementById('password')
const background = document.getElementById('background')
// 引入两个元素
// 密码部分添加事件监听器
password.addEventListener('input', (e) => {
  // 根据输入的值
  const input = e.target.value
  // 值的长度
  const length = input.length
  // 修改模糊效果的值
  const blurValue = 20 - length * 2
  // 然后修改高斯模糊效果
  background.style.filter = `blur(${blurValue}px)`
})
