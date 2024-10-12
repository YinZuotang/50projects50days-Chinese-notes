const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
// 定义了6种声音
// 迭代每一种声音
sounds.forEach(sound => {
    // 创建一个新的按钮元素，添加类名btn,添加文本内容为声音文件的名称
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound
    // 点击监听事件
    btn.addEventListener('click', () => {
        // 调用stopSongs函数停止所有正在播放的音乐
        stopSongs()
        // 获取id为sound（声音文件名）的元素，并播放
        document.getElementById(sound).play()
    })
    // 将新创建的按钮添加到id为'buttons'的元素中
    document.getElementById('buttons').appendChild(btn)
})
// 停止函数
function stopSongs() {
    // 迭代每一个sound
    sounds.forEach(sound => {
        // 获取sound的id为song
        const song = document.getElementById(sound)
        // 暂停音乐播放，并重置播放时间到0
        song.pause()
        song.currentTime = 0;
    })
}