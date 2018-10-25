// global var
var selectedListId;
var selectedIndexId;

var initialContent = true;

function returnHome() {
    var node = document.getElementById('initial').style;
    node.right = '100%';
    node.display = 'block';
    node.zIndex = 1;

    var position = 100;
    var setIntSlow;

    function rightShiftFast() {
        position -= 5;
        node.right = position + '%';

        if (position == 5) {
            clearInterval(setIntFast);
            setIntSlow = setInterval(rightShiftSlow, 20);
        }
    }

    function rightShiftSlow() {
        position -= 0.5;
        node.right = position + '%';

        if (position <= 0) {
            clearInterval(setIntSlow);
            
            // initial condition
            document.getElementById('page').style.display = 'none';
            document.getElementById('content').style.display = 'none';
            document.getElementById('sidebar').style.right = '100%';
            document.getElementById('page').style.left = '100%';
            document.getElementById('content').style.left = '100%';
            document.getElementById('content-container').style.left = '100%';

            initialContent = true;
            showSearch = false;
            showClassContent = false;
            sidebarTriggered = false;
            notClick = false;
        }
    }

    var setIntFast = setInterval(rightShiftFast, 10);
}


// 從右顯示，此用於初始畫面點擊後
function showFromRight(listId) {
    document.getElementById('initial').style.zIndex = 0;
    document.getElementById('page').style.display = 'block';
    document.getElementById('content').style.display = 'block';

    selectedListId = listId;
    initialContent = false;

    // 設定索引
    setIndex(listId);

    // 顯示第一個索引的內容
    indexClick(index_list_eng[listId][0], listId);

    // 動態設定背景顏色
    dynamicSetBg(listId);

    var node = document.getElementById('page').style;
    var node2 = document.getElementById('content-container').style;
    var position = 100;
    var setIntSlow;

    function leftShiftFast() {
        position -= 5;
        node.left = position + '%';
        node2.left = position + '%';

        if (position == 5) {
            clearInterval(setIntFast);
            setIntSlow = setInterval(leftShiftSlow, 20);
        }
    }

    function leftShiftSlow() {
        position -= 0.5;
        node.left = position + '%';
        node2.left = position + '%';

        if (position <= 0) {
            clearInterval(setIntSlow);
            document.getElementById('initial').display = 'none';

            document.getElementById('content-container').style.position = 'fixed';
            document.getElementById('content-container').style.left = '0%';
            document.getElementById('mask').style.display = 'block';
        }
    }

    var setIntFast = setInterval(leftShiftFast, 10);
}

// 從右顯示，此用於顯示課程內容
function showFromRight2(obj) {
    showContent(obj);
    
    var node = document.getElementById('content').style;
    var position = 100;
    var setIntSlow;

    function leftShiftFast() {
        position -= 5;
        node.left = position + '%';

        if (position == 5) {
            clearInterval(setIntFast);
            setIntSlow = setInterval(leftShiftSlow, 20);
        }
    }

    function leftShiftSlow() {
        position -= 0.5;
        node.left = position + '%';

        if (position <= 0) {
            document.getElementById('page').style.display = 'none';
            clearInterval(setIntSlow);
        }
    }

    var setIntFast = setInterval(leftShiftFast, 10);
}

// 關閉課程內容時，往右消失
function closePage() {
    document.getElementById('page').style.display = 'block';
    var node = document.getElementById('content').style;
    var position = 0;
    var setIntSlow;

    showClassContent = false;

    function rightShiftFast() {
        position += 5;
        node.left = position + '%';

        if (position == 100) {
            clearInterval(setIntFast);
        }
    }

    var setIntFast = setInterval(rightShiftFast, 10);
}