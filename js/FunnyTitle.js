var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // $('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = 'ヽ(●-`Д´-)ノ啊啊啊别走！';
        clearTimeout(titleTime);
    }
    else {
        // $('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = 'ヾ(Ő∀Ő3)ノ嘿嘿嘿欢迎回来！' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});