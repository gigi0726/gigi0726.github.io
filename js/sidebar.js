var sidebarTriggered = false;

// 顯示及隱藏側邊欄
function triggerSidebar() {
    var left_node = document.getElementById('sidebar').style;
    var right_node = document.getElementById('content-container').style;

    if (!sidebarTriggered) {
        // 現在要打開側邊欄
        sidebarTriggered = true;

        var left_node_position = 100;
        var setIntSlow;

        function triggerFast() {
            left_node_position -= 5;
            left_node.right = left_node_position + '%';
            right_node.left = 100 - left_node_position + '%';

            if (left_node.right == '15%') {
                clearInterval(setIntFast);
                setIntSlow = setInterval(triggerSlow, 20);
            }
        }

        function triggerSlow() {
            left_node_position -= 0.5;
            left_node.right = left_node_position + '%';
            right_node.left = 100 - left_node_position + '%';

            if (left_node.right == '10%') {
                clearInterval(setIntSlow);

                // show mask
                document.getElementById('mask').style.left = document.getElementById('content-container').style.left;
                var mask = document.getElementById('mask').style;
                mask.opacity = 0.8;
                mask.display = 'block';
            }
        }

        var setIntFast = setInterval(triggerFast, 10);
        
    } else {
        // 現在要關閉側邊欄
        sidebarTriggered = false;

        // hide mask
        document.getElementById('mask').style.display = 'none';

        var left_node_position = 10;
        var setIntSlow;

        function triggerFast() {
            left_node_position += 5;
            left_node.right = left_node_position + '%';
            right_node.left = 100 - left_node_position + '%';

            if (left_node.right == '95%') {
                clearInterval(setIntFast);
                setIntSlow = setInterval(triggerSlow, 20);
            }
        }

        function triggerSlow() {
            left_node_position += 0.5;
            left_node.right = left_node_position + '%';
            right_node.left = 100 - left_node_position + '%';

            if (left_node.right == '100%') {
                clearInterval(setIntSlow);
            }
        }

        var setIntFast = setInterval(triggerFast, 10);
    }
}

// 按下側邊欄的索引
function sidebarClick(listId, whole, indexId) {
    // 清空搜尋欄的值
    document.getElementById('search').value = '';
    // 移除cancel按鈕
    removeCancelBut();

    document.getElementById('content-list-container').style.display = 'block';
    document.getElementById('not-match').style.display = 'none';

    // 動態設定背景顏色
    dynamicSetBg(listId);

    // 設定要顯示索引
    setIndex(listId);
    // 按下索引，顯示過濾後的list
    indexClick(indexId, listId);
    // 關閉側邊欄
    triggerSidebar();
}