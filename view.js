//文档加载完成事件
$(function(){
    //绑定点击事件
    var data = [];
    for (var i = 0; i < localStorage.length; i++){
        bm = [];
        cach = localStorage.getItem(localStorage.key(i));
        bm.push(cach);
        bm.push(localStorage.key(i));
        //bm: [url, title, keywords, notes, xpos, ypos, time_string]
        data.push(bm);
    }
    //window.alert(data[0]);
    var arr_data = []
    for (var i = 0; i < data.length; i++){
        arr_data.push(JSON.parse(data[i][0]).url);
    }
    //document.getElementById("demo").innerHTML = arr_data;
    var unique_WP = [];
    $.each(arr_data, function(i, el){
    if($.inArray(el, unique_WP) === -1) unique_WP.push(el);
    });

    var data_f = []
    for (var i = 0; i < unique_WP.length; i++){
        data_f.push([unique_WP[i],[],0,[]]);
    }

    for (var i = 0; i < data.length; i++){
        for (var j = 0; j < data_f.length; j++){
            if(JSON.parse(data[i][0]).url === data_f[j][0]){
                data_f[j][1] = JSON.parse(data[i][0]).title;
                data_f[j][2] += 1;
                data_f[j][3].push([data[i][1],
                    JSON.parse(data[i][0]).keywords,
                    JSON.parse(data[i][0]).notes, 
                    JSON.parse(data[i][0]).xpos,
                    JSON.parse(data[i][0]).ypos]);
                break
            }
        }
    }
    
    //document.getElementById("demo").innerHTML = data_f[1];

    for (var i = 0; i < data_f.length; i++){
        var title = data_f[i][1];
        var url = data_f[i][0];
        //window.alert(title);
        var newElement = createEl('div', 
        {'class': 'WP', id: url, name: title},
        {width: '98%', margin:'3px', border:'1px solid #DDD'}, 
        title);

        for (var j = 0; j < data_f[i][3].length; j++){
            timestring = data_f[i][3][0][0]
            keywords = data_f[i][3][0][1]
            notes = data_f[i][3][0][2]
            xpos = data_f[i][3][0][3] 
            ypos = data_f[i][3][0][4]      
            
            $(newElement).append('<table width="95%" border="1"><tr><td width="15%">' + (j+1) + '</td><td>' 
            + keywords + '</td></tr><tr><td colspan="2" height = "60">' + notes + '</td></tr></table>');
            

            $('<button type="button")>GO</button>').attr("value",[xpos,ypos,url]).attr("name", timestring).on('click',function(){
                var coords = $(this).val().split(",");
                //alert(typeof coords[1])
                var bgPage = chrome.extension.getBackgroundPage();
                bgPage.gotoURL(parseFloat(coords[0]), parseFloat(coords[1]), parseFloat(coords[2]));
                
                //var fired_button = $(this).val().split(",");
                //alert(fired_button[1]);
                       
            }).appendTo(newElement);

            $('<button type="button" name=timestring+"DELETE">DELETE</button>').attr("value",timestring).on('click',function(){
                localStorage.removeItem($(this).val());
                document.location.reload();
                        
            }).appendTo(newElement);
                       
        };
    };


});



//再通过以下方法来进行调用建立一个新层
//先把建立一个新的DIV的方法写成一个通用方法，然后通过调用方法实例化建立DIV
createEl = function(t, a, y, x)//编写建立一个新对象的通用方法
    { 
        var e = document.createElement(t);
        document.body.appendChild(e); //漏了这一句，否则行不通
        if (a) { 
            for (var k in a) { 
                if (k == 'class') e.className = a[k]; 
                else if (k == 'id') e.id = a[k]; 
        else e.setAttribute(k, a[k]); 
            }
        }
        if (y) { for (var k in y) e.style[k] = y[k]; } 
        if (x) { e.appendChild(document.createTextNode(x)); } 
        return e;
    }