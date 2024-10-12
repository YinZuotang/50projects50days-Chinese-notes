const resetBtn = document.querySelector('#reset');
const playBtn = document.querySelector('#play');
const timerEl = document.querySelector('#timer');
const root = document.querySelector(':root');
// 获取页面上的重置按钮、开始按钮、时间标签、根元素用于设置CSS变量
// 初始设置，设置初始为60s, 一开始palying设置为false, 当前的秒数等于总的秒数
const totalSeconds = 60;
let playing = false;
let currentSeconds = totalSeconds;
// 初始时显示总时间
timerEl.innerText = formatTime(totalSeconds);
// 设置定时器，每秒执行一次run函数
const timerInterval = setInterval(run, 1000);
// play按钮添加事件监听器，点击点击按钮
playBtn.addEventListener('click', () => {
  // playing 等于 否之后的 playing，当前false改为true，当前true改为false
  playing = !playing;
  // 按钮添加play类名
  playBtn.classList.toggle('play');
  playBtn.classList.toggle('bg-green-500'); // 切换播放按钮的背景颜色类
  //  获取播放按钮内的图标元素
  const playIcon = playBtn.querySelector('i');
  playIcon.classList.toggle('fa-play'); // 切换图标为播放图标
  playIcon.classList.toggle('fa-pause'); // 切换图标为暂停图标
});
// 为重置按钮添加点击事件监听器
resetBtn.addEventListener('click', resetAll);

// run函数
function run() {
  // 如果计时器处于播放状态，则每秒减少1秒。当前秒数小于等于0时，清空计时器，执行重置ALL函数
  if (playing) {
    currentSeconds -= 1;
    if (currentSeconds <= 0) {
      clearInterval(timerInterval);
      resetAll();
    }
    // 更新显示的时间
    timerEl.innerText = formatTime(currentSeconds);
    // 更新CSS变量--degrees的值
    root.style.setProperty('--degrees', calcDeg());
  }
}

// 格式化时间
function formatTime(seconds) {
  // 计算分钟数
  const minutes = Math.floor(seconds / 60);
  // 计算秒数
  const newSeconds = seconds % 60;
  //  返回格式化的时间字符串。模板字符串进行拼接，之后分钟和秒数转换为两位数的字符串，2位数不足前面补0
  return `${minutes.toString().padStart(2, '0')}:${newSeconds
    .toString()
    .padStart(2, '0')}`;
}

// 定义calcDeg函数，用于计算CSS变量--degrees的值
function calcDeg() {
  return `${360 - (currentSeconds / totalSeconds) * 360}deg`;
}

// 定义resetAll函数，用于重置计时器的所有值
function resetAll() {
  //  设置计时器为非播放
  playing = false;
  // 移除play、颜色
  playBtn.classList.remove('play');
  playBtn.classList.remove('bg-green-500'); 
  const playIcon = playBtn.querySelector('i');// 获取播放按钮内的图标元素
  //移除图标的暂停类名、添加play类
  playIcon.classList.remove('fa-pause'); 
  playIcon.classList.add('fa-play'); 
  // 重置当前秒数为总秒数，格式化显示的时间
  currentSeconds = totalSeconds;
  timerEl.innerText = formatTime(totalSeconds);
  // 重置为0度
  root.style.setProperty('--degrees', '0deg');
}
