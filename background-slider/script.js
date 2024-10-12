const body = document.body
const slides = document.querySelectorAll('.slide')
//.querySelectorAll 返回一个 NodeList 对象，包含了所有匹配的元素
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
// 初始化activeSlide
let activeSlide = 0
// 设置右侧按钮的事件监听器
rightBtn.addEventListener('click', () => {
  // 点击一次，activeSlide+1
  activeSlide++
  // 判断activeSlide有没有超出4，因为一共5张图，超出了就重置为0
  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
  // 调用两个函数，切换背景图和设置当前的slide
  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
})
// 默认调用一次设置背景图，这样才能初始时，大背景也是有图的
setBgToBody()
// 定义setBgToBody函数
function setBgToBody() {
  // 大的body的背景图等于当前的slides窗口的背景图
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}
// 设置中间小的Slide内容
function setActiveSlide() {
  // 先forEach 方法遍历 slides 数组中的每个幻灯片元素（slide）
  // 对于每个slide，使用 classList.remove('active') 方法移除 'active' 类，也就是溢出CSS中设置的opacity: 1;
  slides.forEach((slide) => slide.classList.remove('active'))
  // 当前slide添加active类
  // slides[activeSlide] 访问当前被激活的slide--由 activeSlide 变量指定的索引
  // 使用 classList.add('active') 方法为这个slide添加 'active' 类
  slides[activeSlide].classList.add('active')
}
