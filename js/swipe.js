var mouseStartX, mouseStartY, mouseEndX, mouseEndY;
var notClick = false;

window.onload = function() {
    document.body.addEventListener('touchstart', function(e) {
        mouseStartX = e.touches[0].clientX;
        mouseStartY = e.touches[0].clirntY;
    }, false);

    document.body.addEventListener('touchmove', function(e) {
        mouseEndX = e.touches[0].clientX;
        mouseEndY = e.touches[0].clirntY;
        // 有移動時，代表不是click
        notClick = true;
    }, false);

    document.body.addEventListener('touchend', function(e) {
        // 若不是click
        if (notClick) {
            notClick = false;
            // swipe threshold
            var swipeWidth = getWidth() * 1 / 5;
            var userSwipeX = mouseEndX - mouseStartX;
            // 判斷是左滑還是右滑
            if (userSwipeX >= swipeWidth) {
                swipeRight();
            } else if (userSwipeX <= (-1 * swipeWidth)) {
                swipeLeft();
            }
        }
    }, false);
}

function swipeRight() {
    if (showClassContent) {
        // 若現在是顯示課程內容，則關閉課程內容
        closePage();
    } else if (showSearch) {
        // 若現在是顯示search的內容，則顯示側邊欄
        triggerSidebar();
    } else if (!sidebarTriggered && !initialContent) {
        var index_num = index_list_eng[selectedListId].indexOf(selectedIndexId);
        if (index_num == 0) {
            // 若是最左邊的索引，則要打開側邊欄
            triggerSidebar();
        } else {
            // 索引往左一個
            --index_num;
            indexClick(index_list_eng[selectedListId][index_num] ,selectedListId);
        }
    }
}

function swipeLeft() {
    if (sidebarTriggered) {
        // 若側邊欄是打開的狀態，則關閉側邊欄
        triggerSidebar();
    } else if (!showClassContent && !initialContent && !showSearch) {
        // 索引往右一個
        var index_num = index_list_eng[selectedListId].indexOf(selectedIndexId);
        if (index_num != (index_list_eng[selectedListId].length - 1)) {
            ++index_num;
            indexClick(index_list_eng[selectedListId][index_num] ,selectedListId);   
        }
    }
}