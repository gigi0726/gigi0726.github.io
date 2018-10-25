// 動態改變背景顏色
// 要改顏色的話 main.css 裡也要改變
function dynamicSetBg(listId) {
    var bgs = document.getElementsByClassName('set-bg');
    if (listId == 0) {
        for (var i = 0; i < bgs.length; ++i) {
            bgs[i].style.backgroundColor = '#FFE8E8';
        }
        document.getElementById('content').style.border = '10px solid #FFE8E8';
        document.getElementById('sidebar-button').style.border = getHeight() * 0.02 + 'px solid #FFE8E8';
    } else if (listId == 1) {
        for (var i = 0; i < bgs.length; ++i) {
            bgs[i].style.backgroundColor = '#E0E0FF';     
        }
        document.getElementById('content').style.border = '10px solid #E0E0FF';
        document.getElementById('sidebar-button').style.border = getHeight() * 0.02 + 'px solid #E0E0FF';
    } else if (listId == 2) {
        for (var i = 0; i < bgs.length; ++i) {
            bgs[i].style.backgroundColor = '#FFF7E8';
        }
        document.getElementById('content').style.border = '10px solid #FFF7E8';
        document.getElementById('sidebar-button').style.border = getHeight() * 0.02 + 'px solid #FFF7E8';
    }
}