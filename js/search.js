var showSearch = false;

// 搜尋欄有輸入東西時要做的事情
function searchList() {
    // 顯示mask(效果用)
    document.getElementById('mask').style.left = document.getElementById('content-container').style.left;
    var mask = document.getElementById('mask').style;
    var opacity = 0;
    var hideMask;
    // mask的初始值：不透明度(0~1)
    mask.opacity = '0';
    mask.display = 'block';

    // 減少mask不透明度
    function increOpacity() {
        opacity += 0.1;
        mask.opacity = opacity;
        if (opacity > 1) {
            clearInterval(showMask);

            // value為搜尋欄的內容
            var value = document.getElementById('search').value;
            var match = false;
            // 清空搜尋欄的時候
            if (value == '') {
                // 移除cancel按鈕
                removeCancelBut();
                showSearch = false;
                match = true;
                // 顯示原本的內容
                showFilteredContentList(selectedIndexId);
                // 顯示索引
                document.getElementById('index-container').style.display = 'flex';
                document.getElementById('not-show-index-container').style.display = 'none';
            } else {
                // 顯示cancel按鈕
                document.getElementById('cancel-button').style.display = 'block';
                document.getElementById('search-container').style.width = getWidth() - (getHeight() * 0.18) + 'px';
                
                showSearch = true;
                // 先清除原本的list內容
                var list_container = document.getElementById('content-list-container');
                list_container.innerHTML = "";
                for (var i = 0; i < wholeData.length; ++i) {
                    for (var j = 1; j <= wholeData[i]['count']; ++j) {
                        if (wholeData[i]['data' + j].title.match(value)) {
                            match = true;
                            var div = document.createElement('div');
                            div.id = 'tmp-' + i + "-" + j;
                            div.className = 'content-list';
                            div.innerHTML = wholeData[i]['data' + j].title;
        
                            div.addEventListener('click', function(e){
                                // can not directly use i, because scope problem (clousure use variable's memory, not value)
                                // so everytime this event fired, i and j will always be the last number
                                showFromRight2(wholeData[e.target.id.split("-")[1]]['data' + e.target.id.split("-")[2]]);
                            }, false);
                            list_container.appendChild(div);
                        }
                    }
                }

                // 拿掉索引列
                document.getElementById('index-container').style.display = 'none';
                document.getElementById('not-show-index-container').style.display = 'flex';
            }

            // 匹配失敗時
            if (!match) {
                document.getElementById('content-list-container').style.display = 'none';
                document.getElementById('not-match').style.display = 'flex';
            } else {
                document.getElementById('content-list-container').style.display = 'block';
                document.getElementById('not-match').style.display = 'none';
            }

            // 增加mask不透明度
            hideMask = setInterval(decreOpacity, 25);
        }
    }

    function decreOpacity() {
        opacity -= 0.1;
        mask.opacity = opacity;
        if (opacity < 0) {
            mask.display = 'none';
            clearInterval(hideMask);
        }
    }

    var showMask = setInterval(increOpacity, 25);
}

// 按下cancel按鈕時清空搜尋欄的值
function cancelSearch() {
    document.getElementById('search').value = '';
    searchList();
}

function removeCancelBut() {
    document.getElementById('cancel-button').style.display = 'none';
    document.getElementById('search-container').style.width = getWidth() - (getHeight() * 0.12) + 'px';
}