const poke_container = document.getElementById('poke-container')
// 获取一个dom元素
// 定义数量和常用的颜色对象
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}
// 获取 colors 对象的所有键（keys），并将它们存储在 main_types 变量中
const main_types = Object.keys(colors)
// 异步函数，执行循环，调回用getPokeon函数，直到150个
const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}
// 定义getPokemon异步函数，参数为id
const getPokemon = async (id) => {
    // 定义一个url链接
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    // 向 PokeAPI 发送请求以获取特定 ID 的宝可梦数据
    const res = await fetch(url)
    // 解析返回的 JSON 数据
    const data = await res.json()
    // 调用createPokemonCard函数来创建宝可梦卡片
    createPokemonCard(data)
}
// createPokemonCard函数，参数为pokemon
const createPokemonCard = (pokemon) => {
    // 定义一个新的div元素，并将其类名设置为 'pokemon'
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    // 定义名字，pokemon第一个字母转成大写+pokemon名字从第2个截取
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    // 编号转换为字符串，并且长度为3位，不足3位的前面补0
    const id = pokemon.id.toString().padStart(3, '0')
    // 遍历宝可梦的types数组，获取每个类型的名称
    const poke_types = pokemon.types.map(type => type.type.name)
    // main_types数组中查找第一个出现在 poke_types 数组中的类型
    // Array.prototype.find()方法用于查找数组中满足条件的第一个元素,
    // poke_types.indexOf(type) > -1返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回 -1。
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    // 根据type设置颜色
    const color = colors[type]
    // 设置背景色
    pokemonEl.style.backgroundColor = color
    // 创建元素，包括图片容器，图片，id\name\类型信息等
    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `
    // 添加到html重
    pokemonEl.innerHTML = pokemonInnerHTML
    // poke_container添加子类pokemon
    poke_container.appendChild(pokemonEl)
}
// 调用函数
fetchPokemons()
