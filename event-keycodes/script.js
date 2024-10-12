const insert = document.getElementById('insert')
// 获取页面上ID为 insert 的元素，并将其存储在变量 insert 中，以引入insert元素
// 添加事件监听器，监听keydown事件，也就是键盘输入
window.addEventListener('keydown', (event) => {
  // 事件执行时，更新insert元素的内部HTML内容
  // 这里使用了模板字符串
  // 如果按下空格键，则显示 'Space'，否则显示实际按下的键的键名
  // ${event.code}: 是显示 event.code 属性的值
  // ${event.keyCode}: 是显示已废弃的 keyCode 属性的值。keyCode 属性返回与按下的键相关联的数字代码
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>event.key</small>
</div>

<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `
})