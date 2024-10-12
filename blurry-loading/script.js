const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
// 引入文本和背景
// 初始化加载进度 0
let load = 0
// setInterval指定的时间间隔周期性地执行代码，调用blurring函数
let int = setInterval(blurring, 30)
// 定义函数
function blurring() {
  // load+1
  load++
  // 条件函数，load大于99时，取消定时器
  if (load > 99) {
    clearInterval(int)
  }
  // .innerText 设置文本内容
  loadText.innerText = `${load}%`
  // 文字设置不透明度，调用scale函数将 load 的值从 [0, 100] 的范围映射到 [1, 0] 的范围
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  // 背景图设置不透明度，blur高斯模糊，scale函数将 load 的值从 [0, 100] 的范围映射到 [30, 0] 的范围
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// 定义scale函数
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
