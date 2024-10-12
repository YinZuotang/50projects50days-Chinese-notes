const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length
// 引入html中的DOM元素，这里使用.querySelectorAll('div').length获取右侧滑动门中div的数量，这里slidesLength=4
// 初始化当前的滑动门索引是0
let activeSlideIndex = 0

// 将slideLeft的top属性设置为-（4-1）*100视窗高度，等于-300vh
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

// 为两个按钮添加click事件的监听器，调用changeSlide函数
upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))
// 定义changeSlide函数，参数是direction，分别为up和down
const changeSlide = (direction) => {
    // 传递sliderContainer标识符元素的内部高度
    const sliderHeight = sliderContainer.clientHeight
    // 点击up按钮时
    if(direction === 'up') {
        // 当前激活的滑动门/幻灯片索引++
        activeSlideIndex++
        // 当activeSlideIndex大于3时，初始化为0
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
         // 当前激活的滑动门/幻灯片索引-1
        activeSlideIndex--
        // 当activeSlideIndex小于0时，赋值为3
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }
    // 左边和邮编都在Y轴上偏移，实现垂直滚动效果，偏移的距离是索引值*幻灯片高度
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}