const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
// 定义了三个链接，这三个链接用于获取电影信息，需要科学上网才能连接上
// 引入三个DOM元素
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
getMovies(API_URL)
// 定义一个异步函数，使用链接进行解析，获取电影
async function getMovies(url) {
    // fetch链接对网站进行请求
    const res = await fetch(url)
    // 解析网站提供的数据转换为Json
    const data = await res.json()
    // 调用showMovies函数，展示电影数据的结果信息
    showMovies(data.results)
}
// 定义showMovies函数
function showMovies(movies) {
    // 对main添加空的html元素，以便于显示新的电影列表
    main.innerHTML = ''
// 迭代电影列表中的每一个电影
    movies.forEach((movie) => {
        // 定义电影的标题、海报、评分、概述
        const { title, poster_path, vote_average, overview } = movie
// 在movie中添加div,class中添加movie
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
// 使用模板字符，为moive添加html元素，海报图片由图片路径+海报路径拼接
// 电影评分用于调用 getClassByRate 函数，以确定评分的颜色类别（绿色、橙色或红色）
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `
        // 创建的HTML元素被添加到 main 元素中。
        main.appendChild(movieEl)
    })
}
// 根据评分进行颜色分类的函数
function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}
// 对表单添加submit事件监听器
form.addEventListener('submit', (e) => {
    // 阻止表单的默认提交行为
    e.preventDefault()
    // 获取搜索框 search 中的搜索词，定义为searchTerm
    const searchTerm = search.value
    // 索词不为空，它调用 getMovies 函数，传入搜索词和搜索API的URL
    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        // 搜索词为空，重新加载当前页面
        window.location.reload()
    }
})