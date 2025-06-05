const ap = new APlayer({
    container: document.getElementById('aplayer'),
    "narrow": false,                          // （可选）播放器袖珍风格
    "fixed": true,
    "autoplay": false,                         // （可选) 自动播放，移动端浏览器暂时不支持此功能
    "mode": "random",                         // （可选）曲目循环类型，有 'random'（随机播放）, 'single' (单曲播放), 'circulation' (循环播放), 'order' (列表播放)， 默认：'circulation' 
    "showlrc": 3,                             // （可选）歌词显示配置项，可选项有：1,2,3
    "mutex": true,                            // （可选）该选项开启时，如果同页面有其他 aplayer 播放，该播放器会暂停
    "theme": "rgba(255,255,255,0)",	          // （可选）播放器风格色彩设置，默认：#b7daff
    "preload": "auto",                    // （可选）音乐文件预载入模式，可选项： 'none' 'metadata' 'auto', 默认: 'auto'
    "listmaxheight": "513px",                 // (可选) 该播放列表的最大长度
    "listFolded": true,                        // （可选）该播放列表是否折叠
    "loop": "all",                              // （可选）歌曲列表循环播放模式，可选项： 'all', 'one', 'none'


    audio: [
        {
            "title": "起风了",
            "author": "买辣椒也用券",
            "url": "https://files.lm379.cn/Music/%E4%B9%B0%E8%BE%A3%E6%A4%92%E4%B9%9F%E7%94%A8%E5%88%B8%20-%20%E8%B5%B7%E9%A3%8E%E4%BA%86.mp3",
            "pic": "https://y.qq.com/music/photo_new/T002R300x300M000003j3NMw1ZBpsv_2.jpg?max_age=2592000",
            // "pic": "https://files.lm379.cn/pic/%E4%B9%B0%E8%BE%A3%E6%A4%92%E4%B9%9F%E7%94%A8%E5%88%B8%20-%20%E8%B5%B7%E9%A3%8E%E4%BA%86.png",
            "lrc": "https://files.lm379.cn/lrc/%E4%B9%B0%E8%BE%A3%E6%A4%92%E4%B9%9F%E7%94%A8%E5%88%B8%20-%20%E8%B5%B7%E9%A3%8E%E4%BA%86.lrc"
        },
        {
            "title": "溯 (Reverse)",
            "author": "CORSAK胡梦周、马吟吟",
            "url": "https://files.lm379.cn/Music/CORSAK%E8%83%A1%E6%A2%A6%E5%91%A8%E3%80%81%E9%A9%AC%E5%90%9F%E5%90%9F%20-%20%E6%BA%AF%20(Reverse).mp3",
            "lrc": "https://files.lm379.cn/lrc/CORSAK%E8%83%A1%E6%A2%A6%E5%91%A8%E3%80%81%E9%A9%AC%E5%90%9F%E5%90%9F%20-%20%E6%BA%AF%20(Reverse).lrc",
            "pic": "https://files.lm379.cn/pic/CORSAK%E8%83%A1%E6%A2%A6%E5%91%A8%E3%80%81%E9%A9%AC%E5%90%9F%E5%90%9F%20-%20%E6%BA%AF%20(Reverse).png"
        },
        {
            "title": "打上花火",
            "author": "DAOKO、米津玄師",
            "url": "https://files.lm379.cn/Music/DAOKO%E3%80%81%E7%B1%B3%E6%B4%A5%E7%8E%84%E5%B8%AB%20-%20%E6%89%93%E4%B8%8A%E8%8A%B1%E7%81%AB.mp3",
            "pic": "https://files.lm379.cn/pic/DAOKO%E3%80%81%E7%B1%B3%E6%B4%A5%E7%8E%84%E5%B8%AB%20-%20%E6%89%93%E4%B8%8A%E8%8A%B1%E7%81%AB.png",
            "lrc": "https://files.lm379.cn/lrc/%E7%B1%B3%E6%B4%A5%E7%8E%84%E5%B8%AB%E3%80%81DAOKO%20-%20%E6%89%93%E4%B8%8A%E8%8A%B1%E7%81%AB.lrc"
        },
        {
            "title": "错位时空",
            "author": "艾辰",
            "url": "https://files.lm379.cn/Music/%E8%89%BE%E8%BE%B0%20-%20%E9%94%99%E4%BD%8D%E6%97%B6%E7%A9%BA.mp3",
            "pic": "https://files.lm379.cn/pic/%E8%89%BE%E8%BE%B0%20-%20%E9%94%99%E4%BD%8D%E6%97%B6%E7%A9%BA%20.png",
            "lrc": "https://files.lm379.cn/lrc/%E8%89%BE%E8%BE%B0%20-%20%E9%94%99%E4%BD%8D%E6%97%B6%E7%A9%BA.lrc"
        },
        {
            "title": "我们都拥有海洋",
            "author": "吴青峰",
            "url": "https://files.lm379.cn/Music/%E5%90%B4%E9%9D%92%E5%B3%B0%20-%20%E6%88%91%E4%BB%AC%E9%83%BD%E6%8B%A5%E6%9C%89%E6%B5%B7%E6%B4%8B.mp3",
            "pic": "https://files.lm379.cn/pic/%E5%90%B4%E9%9D%92%E5%B3%B0%20-%20%E6%88%91%E4%BB%AC%E9%83%BD%E6%8B%A5%E6%9C%89%E6%B5%B7%E6%B4%8B.png",
            "lrc": "https://files.lm379.cn/lrc/%E5%90%B4%E9%9D%92%E5%B3%B0%20-%20%E6%88%91%E4%BB%AC%E9%83%BD%E6%8B%A5%E6%9C%89%E6%B5%B7%E6%B4%8B.lrc"
        },
        {
            "title": "三国恋",
            "author": "Tank",
            "url": "https://files.lm379.cn/Music/Tank%20-%20%E4%B8%89%E5%9B%BD%E6%81%8B.mp3",
            "pic": "https://files.lm379.cn/pic/Tank%20-%20%E4%B8%89%E5%9B%BD%E6%81%8B.jpg",
            "lrc": "https://files.lm379.cn/lrc/Tank%20-%20%E4%B8%89%E5%9B%BD%E6%81%8B.lrc",
        },
        {
            "title": "光芒",
            "author": "凤凰传奇",
            "url": "https://files.lm379.cn/Music/%E5%87%A4%E5%87%B0%E4%BC%A0%E5%A5%87%20-%20%E5%85%89%E8%8A%92.mp3",
            "pic": "https://files.lm379.cn/pic/%E5%87%A4%E5%87%B0%E4%BC%A0%E5%A5%87%20-%20%E5%85%89%E8%8A%92.png",
            "lrc": "https://files.lm379.cn/lrc/%E5%87%A4%E5%87%B0%E4%BC%A0%E5%A5%87%20-%20%E5%85%89%E8%8A%92.lrc",
        },
        {
            "title": "我们的歌谣",
            "author": "凤凰传奇",
            "url": "https://files.lm379.cn/Music/%E5%87%A4%E5%87%B0%E4%BC%A0%E5%A5%87%20-%20%E6%88%91%E4%BB%AC%E7%9A%84%E6%AD%8C%E8%B0%A3.mp3",
            "pic": "https://files.lm379.cn/pic/%E5%87%A4%E5%87%B0%E4%BC%A0%E5%A5%87%20-%20%E6%88%91%E4%BB%AC%E7%9A%84%E6%AD%8C%E8%B0%A3.png",
            "lrc": "https://files.lm379.cn/lrc/%E5%87%A4%E5%87%B0%E4%BC%A0%E5%A5%87%20-%20%E6%88%91%E4%BB%AC%E7%9A%84%E6%AD%8C%E8%B0%A3.lrc",
        },
        {
            "title": "最美的太阳",
            "author": "张杰",
            "url": "https://files.lm379.cn/Music/%E5%BC%A0%E6%9D%B0%20-%20%E6%9C%80%E7%BE%8E%E7%9A%84%E5%A4%AA%E9%98%B3.mp3",
            "lrc": "https://files.lm379.cn/lrc/%E5%BC%A0%E6%9D%B0%20-%20%E6%9C%80%E7%BE%8E%E7%9A%84%E5%A4%AA%E9%98%B3.lrc",
            "pic": "https://files.lm379.cn/pic/%E5%BC%A0%E6%9D%B0%20-%20%E6%9C%80%E7%BE%8E%E7%9A%84%E5%A4%AA%E9%98%B3.png"
        },
        {
            "title": "我记得",
            "author": "赵雷",
            "url": "https://files.lm379.cn/Music/%E8%B5%B5%E9%9B%B7%20-%20%E6%88%91%E8%AE%B0%E5%BE%97.mp3",
            "lrc": "https://files.lm379.cn/lrc/%E8%B5%B5%E9%9B%B7%20-%20%E6%88%91%E8%AE%B0%E5%BE%97.lrc",
            "pic": "https://files.lm379.cn/pic/%E8%B5%B5%E9%9B%B7%20-%20%E6%88%91%E8%AE%B0%E5%BE%97.png"
        },
        {
            "title": "悬溺",
            "author": "葛东琪",
            "url": "https://files.lm379.cn/Music/%E8%91%9B%E4%B8%9C%E7%90%AA%20-%20%E6%82%AC%E6%BA%BA.mp3",
            "pic": "https://files.lm379.cn/pic/%E8%91%9B%E4%B8%9C%E7%90%AA%20-%20%E6%82%AC%E6%BA%BA.png",
            "lrc": "https://files.lm379.cn/lrc/%E8%91%9B%E4%B8%9C%E7%90%AA%20-%20%E6%82%AC%E6%BA%BA.lrc"
        },
        {   
            // 承桓 - 我会等.ogg
            "title": "我会等",
            "author": "承桓",
            "url": "https://files.lm379.cn/Music/%E6%89%BF%E6%A1%93%20-%20%E6%88%91%E4%BC%9A%E7%AD%89.ogg",
            "pic": "https://files.lm379.cn/pic/%E6%89%BF%E6%A1%93%20-%20%E6%88%91%E4%BC%9A%E7%AD%89.png",
            "lrc": "https://files.lm379.cn/lrc/%E6%89%BF%E6%A1%93%20-%20%E6%88%91%E4%BC%9A%E7%AD%89.lrc"
        },
        {   
            // 盛哲 - 在你的身边.ogg
            "title": "在你的身边",
            "author": "盛哲",
            "url": "https://files.lm379.cn/Music/%E7%9B%9B%E5%93%B2%20-%20%E5%9C%A8%E4%BD%A0%E7%9A%84%E8%BA%AB%E8%BE%B9.ogg",
            "pic": "https://files.lm379.cn/pic/%E7%9B%9B%E5%93%B2%20-%20%E5%9C%A8%E4%BD%A0%E7%9A%84%E8%BA%AB%E8%BE%B9.png",
            "lrc": "https://files.lm379.cn/lrc/%E7%9B%9B%E5%93%B2%20-%20%E5%9C%A8%E4%BD%A0%E7%9A%84%E8%BA%AB%E8%BE%B9.lrc"
        },
        {
            // Manafest - Edge of My Life.ogg
            "title": "Edge of My Life",
            "author": "Manafest",
            "url": "https://files.lm379.cn/Music/Manafest%20-%20Edge%20of%20My%20Life.ogg",
            "pic": "https://files.lm379.cn/pic/Manafest%20-%20Edge%20of%20My%20Life.png",
            "lrc": "https://files.lm379.cn/lrc/Manafest%20-%20Edge%20of%20My%20Life.lrc"
        },
        {
            // 郭顶 - 凄美地.mp3
            "title": "凄美地",
            "author": "郭顶",
            "url": "https://files.lm379.cn/Music/%E9%83%AD%E9%A1%B6%20-%20%E5%87%84%E7%BE%8E%E5%9C%B0.mp3",
            "pic": "https://files.lm379.cn/pic/%E9%83%AD%E9%A1%B6%20-%20%E5%87%84%E7%BE%8E%E5%9C%B0.png",
            "lrc": "https://files.lm379.cn/lrc/%E9%83%AD%E9%A1%B6%20-%20%E5%87%84%E7%BE%8E%E5%9C%B0.lrc"
        },
        {
            // 吉星出租 - 暮色回响.mp3
            "title": "暮色回响",
            "author": "吉星出租",
            "url": "https://files.lm379.cn/Music/%E5%90%89%E6%98%9F%E5%87%BA%E7%A7%9F%20-%20%E6%9A%AE%E8%89%B2%E5%9B%9E%E5%93%8D.mp3",
            "pic": "https://files.lm379.cn/pic/%E5%90%89%E6%98%9F%E5%87%BA%E7%A7%9F%20-%20%E6%9A%AE%E8%89%B2%E5%9B%9E%E5%93%8D.jpg",
            "lrc": "https://files.lm379.cn/lrc/%E5%90%89%E6%98%9F%E5%87%BA%E7%A7%9F%20-%20%E6%9A%AE%E8%89%B2%E5%9B%9E%E5%93%8D.lrc"
        },
        {
            // 周深 - 看见我.mp3
            "title": "看见我",
            "author": "周深",
            "url": "https://files.lm379.cn/Music/%E5%91%A8%E6%B7%B1%20-%20%E7%9C%8B%E8%A7%81%E6%88%91.mp3",
            "pic": "https://files.lm379.cn/pic/%E5%91%A8%E6%B7%B1%20-%20%E7%9C%8B%E8%A7%81%E6%88%91.jpg",
            "lrc": "https://files.lm379.cn/lrc/%E5%91%A8%E6%B7%B1%20-%20%E7%9C%8B%E8%A7%81%E6%88%91.lrc"
        },
        {
            // 一只白羊 - 赐我.ogg
            "title": "赐我",
            "author": "一只白羊",
            "url": "https://files.lm379.cn/Music/%E4%B8%80%E5%8F%AA%E7%99%BD%E7%BE%8A%20-%20%E8%B5%90%E6%88%91.ogg",
            "pic": "https://files.lm379.cn/pic/%E4%B8%80%E5%8F%AA%E7%99%BD%E7%BE%8A%20-%20%E8%B5%90%E6%88%91.jpg",
            "lrc": "https://files.lm379.cn/lrc/%E4%B8%80%E5%8F%AA%E7%99%BD%E7%BE%8A%20-%20%E8%B5%90%E6%88%91.lrc"
        },
        {
            // 张妙格 - 我期待的不是雪 (而是有你的冬天).ogg
            "title": "我期待的不是雪 (而是有你的冬天)",
            "author": "张妙格",
            "url": "https://files.lm379.cn/Music/%E5%BC%A0%E5%A6%99%E6%A0%BC%20-%20%E6%88%91%E6%9C%9F%E5%BE%85%E7%9A%84%E4%B8%8D%E6%98%AF%E9%9B%AA%20(%E8%80%8C%E6%98%AF%E6%9C%89%E4%BD%A0%E7%9A%84%E5%86%AC%E5%A4%A9).ogg",
            "pic": "https://files.lm379.cn/pic/%E5%BC%A0%E5%A6%99%E6%A0%BC%20-%20%E6%88%91%E6%9C%9F%E5%BE%85%E7%9A%84%E4%B8%8D%E6%98%AF%E9%9B%AA%20(%E8%80%8C%E6%98%AF%E6%9C%89%E4%BD%A0%E7%9A%84%E5%86%AC%E5%A4%A9).png",
            "lrc": "https://files.lm379.cn/lrc/%E5%BC%A0%E5%A6%99%E6%A0%BC%20-%20%E6%88%91%E6%9C%9F%E5%BE%85%E7%9A%84%E4%B8%8D%E6%98%AF%E9%9B%AA%20(%E8%80%8C%E6%98%AF%E6%9C%89%E4%BD%A0%E7%9A%84%E5%86%AC%E5%A4%A9).lrc"
        },
        {
            // 王宇宙Leto、乔浚丞 - 若月亮没来 (若是月亮还没来).ogg
            "title": "若月亮没来 (若是月亮还没来)",
            "author": "王宇宙Leto、乔浚丞",
            "url": "https://files.lm379.cn/Music/%E7%8E%8B%E5%AE%87%E5%AE%99Leto%E3%80%81%E4%B9%94%E6%B5%9A%E4%B8%9E%20-%20%E8%8B%A5%E6%9C%88%E4%BA%AE%E6%B2%A1%E6%9D%A5%20(%E8%8B%A5%E6%98%AF%E6%9C%88%E4%BA%AE%E8%BF%98%E6%B2%A1%E6%9D%A5).ogg",
            "pic": "https://files.lm379.cn/pic/%E7%8E%8B%E5%AE%87%E5%AE%99Leto%E3%80%81%E4%B9%94%E6%B5%9A%E4%B8%9E%20-%20%E8%8B%A5%E6%9C%88%E4%BA%AE%E6%B2%A1%E6%9D%A5%20(%E8%8B%A5%E6%98%AF%E6%9C%88%E4%BA%AE%E8%BF%98%E6%B2%A1%E6%9D%A5).png",
            "lrc": "https://files.lm379.cn/lrc/%E7%8E%8B%E5%AE%87%E5%AE%99Leto%E3%80%81%E4%B9%94%E6%B5%9A%E4%B8%9E%20-%20%E8%8B%A5%E6%9C%88%E4%BA%AE%E6%B2%A1%E6%9D%A5%20(%E8%8B%A5%E6%98%AF%E6%9C%88%E4%BA%AE%E8%BF%98%E6%B2%A1%E6%9D%A5).lrc"
        },
        {
            // 都智文 - 全世界在你身后.ogg
            "title": "全世界在你身后",
            "author": "都智文",
            "url": "https://files.lm379.cn/Music/%E9%83%BD%E6%99%BA%E6%96%87%20-%20%E5%85%A8%E4%B8%96%E7%95%8C%E5%9C%A8%E4%BD%A0%E8%BA%AB%E5%90%8E.ogg",
            "pic": "https://files.lm379.cn/pic/%E9%83%BD%E6%99%BA%E6%96%87%20-%20%E5%85%A8%E4%B8%96%E7%95%8C%E5%9C%A8%E4%BD%A0%E8%BA%AB%E5%90%8E.jpg",
            "lrc": "https://files.lm379.cn/lrc/%E9%83%BD%E6%99%BA%E6%96%87%20-%20%E5%85%A8%E4%B8%96%E7%95%8C%E5%9C%A8%E4%BD%A0%E8%BA%AB%E5%90%8E.lrc"
        },
        {
            // 曾可妮、都智文 - Falling You.ogg
            "title": "Falling You",
            "author": "曾可妮、都智文",
            "url": "https://files.lm379.cn/Music/%E6%9B%BE%E5%8F%AF%E5%A6%AE%E3%80%81%E9%83%BD%E6%99%BA%E6%96%87%20-%20Falling%20You.ogg",
            "pic": "https://files.lm379.cn/pic/%E6%9B%BE%E5%8F%AF%E5%A6%AE%E3%80%81%E9%83%BD%E6%99%BA%E6%96%87%20-%20Falling%20You.png",
            "lrc": "https://files.lm379.cn/lrc/%E6%9B%BE%E5%8F%AF%E5%A6%AE%E3%80%81%E9%83%BD%E6%99%BA%E6%96%87%20-%20Falling%20You.lrc"  
        }
    ]
});