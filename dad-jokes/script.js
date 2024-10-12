const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
// DOM操作获取两个元素，分别是文本和按钮部分
// 添加按钮的事件监听，执行获取joke函数
jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT，这里使用了异步函数相关设置
// async 关键字表示函数会返回一个Promise对象，使用 await 关键字来等待异步操作完成
async function generateJoke() {
  // 创建配置对象config，指定了请求的头部headers:信息。
  const config = {
    headers: {
      // Accept:头部告诉服务器，客户端期望接收application/json类型的数据
      Accept: 'application/json',
    },
  }
  // fetch函数向https://icanhazdadjoke.com发送一个HTTP GET请求，并传入配置对象
  // await关键字用于等待fetch操作完成，并将响应对象存储在变量res中
  const res = await fetch('https://icanhazdadjoke.com', config)
  // 调用响应对象的.json()方法来解析响应体中的JSON数据，并使用await等待解析完成,解析后的数据被存储在变量 data 中
  const data = await res.json()

  // 将解析出的data.joke设置为变量jokeEl指向的元素的innerHTML，这样joke就会显示在网页上
  jokeEl.innerHTML = data.joke
}

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
