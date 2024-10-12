const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')
// 获取DOM元素的引用
// 定义一个对象，包括了四个函数来生成随机字符
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}
// 对复制密码的按钮添加事件监听器，监听click事件
clipboardEl.addEventListener('click', () => {
    // 密码是result sapn里面的字符
    const password = resultEl.innerText;
    // 如果密码是空或者不存在，直接返回，无任何其他提示
  if (!password) {
    return;
  }
//   如果是密码存在，调用浏览器的剪贴板API，将password的值复制到用户的剪贴板中
  navigator.clipboard.writeText(password);
//   使用警告弹出提示信息
    alert('Password copied to clipboard!')
})
// 为生成密码的大按钮添加事件监听
generateEl.addEventListener('click', () => {
    // lengthEI的值转为数字类型，并赋值给length
    const length = +lengthEl.value
    // 4个复选框的选中状态
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked
    // 执行函数，生成密码
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})
// 生成密码函数，5个参数
function generatePassword(lower, upper, number, symbol, length) {
    // 初始化密码为空
    let generatedPassword = ''
    // 计算用户选择的字符类型总数
    const typesCount = lower + upper + number + symbol
    // 创建一个数组，通过筛选他们的第一个值，其实就一个值，存储是或者否。一个对象数组，筛选是/否
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])

    // 如果四个参数都没有选，那就是空的密码
    if(typesCount === 0) {
        return ''
    }
    // 一个循环，根据密码长度和字符类型的数量进行循环
    for(let i = 0; i < length; i += typesCount) {
        // 遍历每一种被选择的类型
        typesArr.forEach(type => {
            // 根据当前的字符类型
            const funcName = Object.keys(type)[0]
            // 从randomFunc中调用相应的随机函数生成一个字符，并将其添加到generatedPassword字符串中
            generatedPassword += randomFunc[funcName]()
        })
    }
    // 截取密码程度
    const finalPassword = generatedPassword.slice(0, length)
    // 返回密码
    return finalPassword
}
// 函数，生成随机数。过程是先使用Math.random生成0-1的随机数，*26是26个字母，再Math.floor向下取整是得到一个0-25的数字，97是小写的a对应的ASCII码
// String.fromCharCode() 函数将一个或多个ASCII码值转换为相应的字符，得到一个随机小写字母。
// 其他三个函数类似
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
