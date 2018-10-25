var showClassContent = false;

// 按下課程時，顯示課程評價內容
function showContent(obj) {
    var content = document.getElementById('article-content');
    content.innerHTML = "";

    showClassContent = true;

    if (obj.type == 1) {
        // title
        var div_title = document.createElement('div');
        div_title.className = 'title';
        div_title.innerHTML = obj.title;
        content.appendChild(div_title);

        // way
        var div_way = document.createElement('div');
        div_way.className = 'sub-title';
        div_way.innerHTML = '上課方式';
        content.appendChild(div_way);        
        var a1 = document.createElement('a');
        a1.innerHTML = obj.way + '<br><br>';
        content.appendChild(a1);
        
        // score
        var div_score = document.createElement('div');
        div_score.className = 'sub-title';
        div_score.innerHTML = '成績評定';
        content.appendChild(div_score);        
        var a2 = document.createElement('a');
        a2.innerHTML = obj.score + '<br><br>';
        content.appendChild(a2);

        // history
        var div_history = document.createElement('div');
        div_history.className = 'sub-title';
        div_history.innerHTML = '過來人心得';
        content.appendChild(div_history);        
        var a3 = document.createElement('a');
        a3.innerHTML = obj.history + '<br><br>';
        content.appendChild(a3);        
    } else {
        // title
        var div_title = document.createElement('div');
        div_title.className = 'title';
        div_title.innerHTML = obj.title;
        content.appendChild(div_title);

        // content
        var div_content = document.createElement('div');
        div_content.className = 'sub-title';
        div_content.innerHTML = '文章內容';
        content.appendChild(div_content);        
        var a = document.createElement('a');
        a.innerHTML = obj.content;
        content.appendChild(a);
    }

}