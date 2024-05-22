const ap = new APlayer({
    container: document.getElementById('aplayer'),
    "narrow": false,                          // （可选）播放器袖珍风格
    "autoplay": false,                         // （可选) 自动播放，移动端浏览器暂时不支持此功能
    "mode": "random",                         // （可选）曲目循环类型，有 'random'（随机播放）, 'single' (单曲播放), 'circulation' (循环播放), 'order' (列表播放)， 默认：'circulation' 
    "showlrc": 3,                             // （可选）歌词显示配置项，可选项有：1,2,3
    "mutex": true,                            // （可选）该选项开启时，如果同页面有其他 aplayer 播放，该播放器会暂停
    "theme": "rgba(255,255,255,0)",	                      // （可选）播放器风格色彩设置，默认：#b7daff
    "preload": "auto",                    // （可选）音乐文件预载入模式，可选项： 'none' 'metadata' 'auto', 默认: 'auto'
    "listmaxheight": "513px",                 // (可选) 该播放列表的最大长度
    "listFolded": true,                        // （可选）该播放列表是否折叠
    "loop": "all",                              // （可选）歌曲列表循环播放模式，可选项： 'all', 'one', 'none'


    audio: [
        {
            "title": "起风了",
            "author": "买辣椒也用券",
            "url": "https://r2.lm379.cn/files/Music/%E4%B9%B0%E8%BE%A3%E6%A4%92%E4%B9%9F%E7%94%A8%E5%88%B8%20-%20%E8%B5%B7%E9%A3%8E%E4%BA%86.mp3",
            "pic": "https://y.qq.com/music/photo_new/T002R300x300M000003j3NMw1ZBpsv_2.jpg?max_age=2592000",
            // "lrc": "https://oss.lm379.cf/files%2Flrc%2F%E4%B9%B0%E8%BE%A3%E6%A4%92%E4%B9%9F%E7%94%A8%E5%88%B8%20-%20%E8%B5%B7%E9%A3%8E%E4%BA%86.lrc"
            "lrc": "https://jsd.onmicrosoft.cn/gh/lm379s/files/lrc/%E4%B9%B0%E8%BE%A3%E6%A4%92%E4%B9%9F%E7%94%A8%E5%88%B8%20-%20%E8%B5%B7%E9%A3%8E%E4%BA%86.lrc"
        },
        {
            "title": "溯 (Reverse)",
            "author": "CORSAK胡梦周、马吟吟",
            "url": "https://r2.lm379.cn/files/Music/CORSAK%E8%83%A1%E6%A2%A6%E5%91%A8%E3%80%81%E9%A9%AC%E5%90%9F%E5%90%9F%20-%20%E6%BA%AF%20(Reverse).mp3",
            "lrc": "https://jsd.cdn.zzko.cn/gh/lm379s/files/lrc/CORSAK%E8%83%A1%E6%A2%A6%E5%91%A8%E3%80%81%E9%A9%AC%E5%90%9F%E5%90%9F%20-%20%E6%BA%AF%20(Reverse).lrc",
            "pic": "https://r2.lm379.cn/files%2Fpic%2FCORSAK%E8%83%A1%E6%A2%A6%E5%91%A8%E3%80%81%E9%A9%AC%E5%90%9F%E5%90%9F%20-%20%E6%BA%AF%20(Reverse).png"
        },
        {
            "title": "打上花火",
            "author": "DAOKO、米津玄師",
            "url": "https://r2.lm379.cn/files/Music/DAOKO%E3%80%81%E7%B1%B3%E6%B4%A5%E7%8E%84%E5%B8%AB%20-%20%E6%89%93%E4%B8%8A%E8%8A%B1%E7%81%AB.mp3",
            "pic": "https://r2.lm379.cn/files%2Fpic%2FDAOKO%E3%80%81%E7%B1%B3%E6%B4%A5%E7%8E%84%E5%B8%AB%20-%20%E6%89%93%E4%B8%8A%E8%8A%B1%E7%81%AB.png",
            "lrc": "https://jsd.onmicrosoft.cn/gh/lm379s/files/lrc/%E7%B1%B3%E6%B4%A5%E7%8E%84%E5%B8%AB%E3%80%81DAOKO%20-%20%E6%89%93%E4%B8%8A%E8%8A%B1%E7%81%AB.lrc"
        },
        {
            "title": "错位时空",
            "author": "艾辰",
            "url": "https://r2.lm379.cn/files/Music/%E8%89%BE%E8%BE%B0%20-%20%E9%94%99%E4%BD%8D%E6%97%B6%E7%A9%BA.mp3",
            "pic": "https://r2.lm379.cn/files%2Fpic%2F%E8%89%BE%E8%BE%B0%20-%20%E9%94%99%E4%BD%8D%E6%97%B6%E7%A9%BA%20.png",
            "lrc": "https://jsd.onmicrosoft.cn/gh/lm379s/files/lrc/%E8%89%BE%E8%BE%B0%20-%20%E9%94%99%E4%BD%8D%E6%97%B6%E7%A9%BA.lrc"
        },
        {
            "title": "我们都拥有海洋",
            "author": "吴青峰",
            "url": "https://r2.lm379.cn/files/Music/%E5%90%B4%E9%9D%92%E5%B3%B0%20-%20%E6%88%91%E4%BB%AC%E9%83%BD%E6%8B%A5%E6%9C%89%E6%B5%B7%E6%B4%8B.mp3",
            "pic": "https://r2.lm379.cn/files/pic/%E5%90%B4%E9%9D%92%E5%B3%B0%20-%20%E6%88%91%E4%BB%AC%E9%83%BD%E6%8B%A5%E6%9C%89%E6%B5%B7%E6%B4%8B.png",
            "lrc": "https://jsd.cdn.zzko.cn/gh/lm379s/files/lrc/%E5%90%B4%E9%9D%92%E5%B3%B0%20-%20%E6%88%91%E4%BB%AC%E9%83%BD%E6%8B%A5%E6%9C%89%E6%B5%B7%E6%B4%8B.lrc"
        },
        {
            "title": "三国恋",
            "author": "Tank",
            "url": "https://r2.lm379.cn/files/Music/Tank%20-%20%E4%B8%89%E5%9B%BD%E6%81%8B.mp3",
            "pic": "https://y.qq.com/music/photo_new/T002R300x300M0000029GgMd2qVyYA_1.jpg?max_age=2592000",
            "lrc": "https://r2.lm379.cn/files%2Fpic%2FTank%20-%20%E4%B8%89%E5%9B%BD%E6%81%8B.jpg",
        },
        {
            "title": "光芒",
            "author": "凤凰传奇",
            "url": "https://r2.lm379.cn/files/Music/%E5%87%A4%E5%87%B0%E4%BC%A0%E5%A5%87%20-%20%E5%85%89%E8%8A%92.mp3",
            "pic": "https://r2.lm379.cn/files/pic/%E5%87%A4%E5%87%B0%E4%BC%A0%E5%A5%87%20-%20%E5%85%89%E8%8A%92.png",
            "lrc": "https://jsd.onmicrosoft.cn/gh/lm379s/files/lrc/%E5%87%A4%E5%87%B0%E4%BC%A0%E5%A5%87%20-%20%E5%85%89%E8%8A%92.lrc",
        },
        {
            "title": "我们的歌谣",
            "author": "凤凰传奇",
            "url": "https://r2.lm379.cn/files/Music/%E5%87%A4%E5%87%B0%E4%BC%A0%E5%A5%87%20-%20%E6%88%91%E4%BB%AC%E7%9A%84%E6%AD%8C%E8%B0%A3.mp3",
            "pic": "https://r2.lm379.cn/files/pic/%E5%87%A4%E5%87%B0%E4%BC%A0%E5%A5%87%20-%20%E6%88%91%E4%BB%AC%E7%9A%84%E6%AD%8C%E8%B0%A3.png",
            "lrc": "https://jsd.onmicrosoft.cn/gh/lm379s/files/lrc/%E5%87%A4%E5%87%B0%E4%BC%A0%E5%A5%87%20-%20%E6%88%91%E4%BB%AC%E7%9A%84%E6%AD%8C%E8%B0%A3.lrc",
        },
        {
            title: "最美的太阳",
            author: "张杰",
            url: "https://r2.lm379.cn/files%2FMusic%2F%E5%BC%A0%E6%9D%B0%20-%20%E6%9C%80%E7%BE%8E%E7%9A%84%E5%A4%AA%E9%98%B3.mp3",
            lrc: "https://jsd.onmicrosoft.cn/gh/lm379s/files/lrc/%E5%BC%A0%E6%9D%B0%20-%20%E6%9C%80%E7%BE%8E%E7%9A%84%E5%A4%AA%E9%98%B3.lrc",
            pic: "https://r2.lm379.cn/files%2Fpic%2F%E5%BC%A0%E6%9D%B0%20-%20%E6%9C%80%E7%BE%8E%E7%9A%84%E5%A4%AA%E9%98%B3.png"
        }
	]
});