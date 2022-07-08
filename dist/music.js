const ap = new APlayer({
    container: document.getElementById('aplayer'),
    "narrow": false,                          // （可选）播放器袖珍风格
    "autoplay": true,                         // （可选) 自动播放，移动端浏览器暂时不支持此功能
    "mode": "random",                         // （可选）曲目循环类型，有 'random'（随机播放）, 'single' (单曲播放), 'circulation' (循环播放), 'order' (列表播放)， 默认：'circulation' 
    "showlrc": 3,                             // （可选）歌词显示配置项，可选项有：1,2,3
    "mutex": true,                            // （可选）该选项开启时，如果同页面有其他 aplayer 播放，该播放器会暂停
    "theme": "#e6d0b2",	                      // （可选）播放器风格色彩设置，默认：#b7daff
    "preload": "metadata",                    // （可选）音乐文件预载入模式，可选项： 'none' 'metadata' 'auto', 默认: 'auto'
    "listmaxheight": "513px",                 // (可选) 该播放列表的最大长度

    audio: [
        {
            "title": "起风了",
            "author": "买辣椒也用券",
            "url": "https://pan.lm379.cn/d/music/%E4%B9%B0%E8%BE%A3%E6%A4%92%E4%B9%9F%E7%94%A8%E5%88%B8%20-%20%E8%B5%B7%E9%A3%8E%E4%BA%86.mp3",
            "pic": "https://y.qq.com/music/photo_new/T002R300x300M000003j3NMw1ZBpsv_2.jpg?max_age=2592000",
            "lrc": "https://pan.lm379.cn/d/music/%E4%B9%B0%E8%BE%A3%E6%A4%92%E4%B9%9F%E7%94%A8%E5%88%B8%20-%20%E8%B5%B7%E9%A3%8E%E4%BA%86.lrc"
        },
        {
            "title": "溯 (Reverse)",
            "author": "CORSAK胡梦周、马吟吟",
            "url": "https://pan.lm379.cn/d/music/CORSAK%E8%83%A1%E6%A2%A6%E5%91%A8%E3%80%81%E9%A9%AC%E5%90%9F%E5%90%9F%20-%20%E6%BA%AF%20(Reverse).flac",
            "lrc": "https://pan.lm379.cn/d/music/CORSAK%E8%83%A1%E6%A2%A6%E5%91%A8%E3%80%81%E9%A9%AC%E5%90%9F%E5%90%9F%20-%20%E6%BA%AF%20(Reverse).lrc",
            "pic": "https://y.qq.com/music/photo_new/T002R300x300M000002yOiJ347ly2o_1.jpg?max_age=2592000"
        }
	]
});