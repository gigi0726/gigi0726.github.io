// 動態改變背景顏色
// 要改顏色的話 main.css 裡也要改變

var bgColor = ['#FFE8E8', '#E0E0FF', '#FFF7E8', '#99ffb0']

function dynamicSetBg(listId) {
    var bgs = document.getElementsByClassName('set-bg');
    for (var i = 0; i < bgs.length; ++i) {
        bgs[i].style.backgroundColor = bgColor[listId];
    }
    document.getElementById('content').style.border = '10px solid' + bgColor[listId];
    document.getElementById('sidebar-button').style.border = getHeight() * 0.02 + 'px solid' + bgColor[listId];
}
