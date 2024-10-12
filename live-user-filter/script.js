const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []
// 引入两个DOM元素，分别是结果列表和筛选器输入框。初始化定义一个数组，
// 调用函数
getData()
// 添加输入事件监听器，为filterData函数传递进元素的值
filter.addEventListener('input', (e) => filterData(e.target.value))
// 异步函数，用于获取用户数据
async function getData() {
    // 从该URL获取50个随机用户. fetch API发起网络请求
    const res = await fetch('https://randomuser.me/api?results=50')
    // res.json() 异步解析响应数据为JSON格式，并解构赋值给变量 results
    const { results } = await res.json()

    // Clear result清空上次产生的结果
    result.innerHTML = ''
    // 迭代筛选的每一个用户
    results.forEach(user => {
        // 创建单元格元素
        const li = document.createElement('li')
        // 将每一个li添加到listItems中
        listItems.push(li)
        // 为每一个li元素添加html内容，从用户的图片、名字、城市等信息中筛选出信息，使用模板字符串
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        // 将li单元格添加进用户列表中
        result.appendChild(li)
    })
}
// 定义函数筛选数据，根据用户输入的搜索词过滤用户列表
function filterData(searchTerm) {
    // 遍历 listItems 数组（全局数组，存储了所有 <li> 元素）
    listItems.forEach(item => {
        // 检查其文本内容是否包含搜索词，如果有搜索词，它的类名中移除hide隐藏效果，否则的话在类名中添加hide
        // 这里使用toLowerCase()将搜索词和文本内容都小写进行检索匹配
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}