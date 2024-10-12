// 从GitHub API URL获取用户信息和仓库信息，将这些信息显示在网页上,使用axios库来发送HTTP请求，原生DOM操作来更新页面内容
const APIURL = 'https://api.github.com/users/'
// 引入DOM元素
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
// 定义异步函数,获取用户名
async function getUser(username) {
    // 接受一个用户名作为参数，然后使用axios向GitHub API发送请求以获取该用户的信息
    try {
        const { data } = await axios(APIURL + username)
        // 请求成功，它会调用createUserCard函数来创建用户信息卡片，并调用getRepos函数来获取用户的仓库信息。
        createUserCard(data)
        getRepos(username)
    } catch(err) {
        // 请求失败（如果用户不存在，返回404状态码），调用createErrorCard函数来显示错误信息。
        if(err.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    }
}
// 异步函数,得到仓库信息
async function getRepos(username) {
    // 如果成功的话,则调用addReposToCard函数来将仓库信息添加到用户信息卡片中
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        addReposToCard(data)
    } catch(err) {
        // 失败了就使用createErrorCard函数显示错误信息
        createErrorCard('Problem fetching repos')
    }
}
// 函数接受一个用户对象作为参数，然后创建一个HTML字符串，用于显示用户的信息（头像、用户名、个人简介、关注者数量、关注数量和公共仓库数量）
// 将这个HTML字符串设置为main元素的内容
function createUserCard(user) {
    const userID = user.name || user.login
    // 使用模板字符串,创建响应的元素
    // 第一个模板字符串下面的?表示条件判断,如果user 对象的 bio 属性是否存在且非空,使用p标签创建,否则就是空
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    // 创建card元素,包括用户的信息
    const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `
    main.innerHTML = cardHTML
    
}
// 接受一个错误消息作为参数，然后创建一个包含该错误消息的HTML字符串，并将其设置为main元素的内容。
function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}
// 函数接受一个仓库数组作为参数，创建最多5个仓库的链接，并将它们添加到用户信息卡片的repos元素中。
function addReposToCard(repos) {
    // 引入dom元素
    const reposEl = document.getElementById('repos')

    repos
        // slice(0, 5) 方法从数组中提取从索引0开始的5个元素（即前5个仓库）
        .slice(0, 5)
        // 遍历每一个仓库, 
        .forEach(repo => {
            // 创建一个新的 <a> 元素，用于链接到仓库的GitHub页面。
            const repoEl = document.createElement('a')
            // 创建的 <a> 元素添加一个类名 repo,以应用相关的样式
            repoEl.classList.add('repo')
            // 设置 <a> 元素的 href 属性，使其链接到仓库的HTML页面
            repoEl.href = repo.html_url
            // 点击链接时会在新标签页中打开，而不是在当前页面中
            repoEl.target = '_blank'
            // 设置 <a> 元素的文本内容为仓库的名称
            repoEl.innerText = repo.name
            // 创建的 <a> 元素添加到 reposEl 元素中
            reposEl.appendChild(repoEl)
        })
}
// 添加submit事件监听器：
form.addEventListener('submit', (e) => {
    // 先阻止表单的默认提交行为
    e.preventDefault()
    // 再获取用户输入的用户名
    const user = search.value
    // 调用getUser函数来获取用户信息
    if(user) {
        getUser(user)
        // 如果用户输入了有效的用户名，搜索后清空搜索输入框
        search.value = ''
    }
})

