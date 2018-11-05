var wholeData = [data_compulsory, data_elective, data_society, data_humanities, data_art, data_science, data_job, data_summer];

// 按下索引時，顯示過濾過的內容
function showFilteredContentList(indexId) {
    var list_container = document.getElementById('content-list-container');
    list_container.innerHTML = "";
    
    var tmp_index;
    if (indexId == 'compulsory') {
        tmp_index = 0;
    } else if (indexId == 'elective') {
        tmp_index = 1;
    } else if (indexId == 'society') {
        tmp_index = 2;
    } else if (indexId == 'humanities') {
        tmp_index = 3;
    } else if (indexId == 'art') {
        tmp_index = 4;
    } else if (indexId == 'science') {
        tmp_index = 5;
    } else if (indexId == 'job') {
        tmp_index = 6;
    }  else if (indexId == 'summer') {
        tmp_index = 7;
    }

    for (var i = 1; i <= wholeData[tmp_index]['count']; ++i) {
        var div = document.createElement('div');
        div.id = 'tmp-' + i;
        div.className = 'content-list';
        div.innerHTML = wholeData[tmp_index]['data' + i].title;

        div.addEventListener('click', function(e){
            // can not directly use i, because scope problem (clousure use variable's memory, not value)
            // so everytime this event fired, i will always be the last number
            showFromRight2(wholeData[tmp_index]['data' + e.target.id.split("-")[1]]);
        }, false);
        list_container.appendChild(div);
    }
}

