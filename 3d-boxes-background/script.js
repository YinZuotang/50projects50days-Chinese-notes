const boxesContainer = document.getElementById('boxes')
// 上句获取html文件中ID为boxes的元素的引用
const btn = document.getElementById('btn')
// 上句获取html文件中ID为btn的元素的引用

// 下面为按钮添加一个点击事件监听器，点击按钮时，切换boxesContainer的big类。
// 点击magic按钮后big类被添加，根据CSS样式改变 boxes也就是boxesContainer 的尺寸
btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

// 生成一个4x4的网格布局，每个格子是一个带有box类的div元素。
function createBoxes() {
  // 两次循环，生成4*4的小盒子
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      // 使用document.createElement方法创建div
      const box = document.createElement('div')
      // 为创建的div添加box
      box.classList.add('box')
      // 设置每个box的背景位置，分别是向左偏移-j*125px即向右偏移j*125，和向上偏移-i*125px
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
      // 将创建的box元素添加到boxesContainer中
      boxesContainer.appendChild(box)
    }
  }
}

createBoxes()
