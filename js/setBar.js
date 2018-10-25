// 取得裝置的高度
function getHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}

// 取得裝置的寬度
function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

function setBar() {
    // 動態設定側邊欄按鈕的大小
    var but = document.getElementById('sidebar-button');
    var h = getHeight(), w = getWidth();
    but.style.width = h * 0.06 + 'px';
    but.style.height = h * 0.06 * 0.875 + 'px';
    // but.style.border = h * 0.02 + 'px solid var(--main-bg-color)';
    but.style.borderRadius = h * 0.04 + 'px';

    // 動態設定搜尋欄的寬度
    document.getElementById('search-container').style.width = w - (h * 0.12) + 'px';
    // document.getElementById('search-container').style.width = w - (h * 0.18) + 'px';
    document.getElementById('search').style.fontSize = h * 0.03 + 'px';

    // 動態設定cancel按鈕的大小
    document.getElementById('cancel-button').style.width = (h * 0.06) + 'px';
}

// 網頁讀取以及改變視窗大小時要改變上述東西的尺寸
window.addEventListener('load', setBar, false);
window.addEventListener('resize', setBar, false);