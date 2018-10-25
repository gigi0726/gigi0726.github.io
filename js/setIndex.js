// var index_count = [2, 4, 1];
var index_list_eng = [['compulsory', 'elective'],
                      ['society', 'humanities', 'art', 'science'],
                      ['job']];
var index_list_chi = [['必修', '選修'],
                      ['社會科學', '史哲學科', '文學藝術', '自然科學'],
                      ['人才招募']];

// 設定索引欄
function setIndex(listId) {
    document.getElementById('index-container').innerHTML = "";

    // var l = [];

    // // 加入索引
    // function addIndexOption(name, indexId) {
    //     var obj = {
    //         name: name,
    //         indexId: indexId
    //     }
    //     l.push(obj);
    // }

    // for (var i = 0; i < index_list_chi[listId].length; ++i) {
    //     addIndexOption(index_list_chi[listId][i], index_list_eng[listId][i]);
    // }

    
    // 設定索引
    for (var i = 0; i < index_list_chi[listId].length; ++i) {
        var div = document.createElement('div');
        div.innerHTML = index_list_chi[listId][i];
        div.id = 'index-' + index_list_eng[listId][i];
        div.className = 'index';
        div.addEventListener('click', function(e){
            indexClick(e.target.id.split("-")[1], listId);
        }, false);
        document.getElementById('index-container').appendChild(div);
    }
}

// 按下索引時要做的事情
function indexClick(indexId, listId) {
    // 顯示索引欄
    document.getElementById('index-container').style.display = 'flex';
    document.getElementById('not-show-index-container').style.display = 'none';

    // 只有一個索引可以被按下
    var clicked_index = document.getElementsByClassName('clicked-index');
    if (clicked_index.length != 0) { 
        clicked_index[0].className = 'index';
    }

    // set global var
    selectedListId = listId;
    selectedIndexId = indexId;
    showSearch = false;

    // 清除搜尋欄的值
    document.getElementById('search').value = '';
    // 移除cancel按鈕
    removeCancelBut();

    document.getElementById('content-list-container').style.display = 'block';
    document.getElementById('not-match').style.display = 'none';

    // 顯示mask(效果用)
    document.getElementById('mask').style.left = document.getElementById('content-container').style.left;
    var mask = document.getElementById('mask').style;
    var opacity = 0;
    var hideMask;
    mask.opacity = '0';
    mask.display = 'block';

    function increOpacity() {
        opacity += 0.1;
        mask.opacity = opacity;
        if (opacity > 1) {
            clearInterval(showMask);

            document.getElementById('index-' + indexId).className += ' clicked-index';   
            // show filtered content
            showFilteredContentList(indexId);

            // hide mask
            hideMask = setInterval(decreOpacity, 20);
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

    var showMask = setInterval(increOpacity, 20);
}