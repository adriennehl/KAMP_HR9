//文档加载完成事件
$(function(){
    //绑定点击事件
    $("#btn1").click(function(){
        $("#div1").after("<font color='red' size='7'>Test</font>");
    this.$OuterDiv = $(document.createElement("div"))
        .hide()
        .append($('<table></table>')
            .attr({ cellSpacing : 0 })
            .addClass("text")
        )
    ;
    });
});

function analyze_local_storage(){
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
        data_f.push([unique_WP[i],[],[]]);
    }


    for (var i = 0; i < data.length; i++){
        for (var j = 0; j < data_f.length; j++){
            if(JSON.parse(data[i][0]).url === data_f[j][0]){
                data_f[j][1] = JSON.parse(data[i][0]).title;
                data_f[j][2].push([data[i][1],
                    JSON.parse(data[i][0]).keywords,
                    JSON.parse(data[i][0]).notes, 
                    JSON.parse(data[i][0]).xpos,
                    JSON.parse(data[i][0]).ypos]);
                break
            }
        }
    }
    return data_f
}





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

//再通过以下方法来进行调用建立一个新层
function Button_onclick() //先把建立一个新的DIV的方法写成一个通用方法，然后通过调用方法实例化建立DIV
{var newElement = createEl('div', 
    {'class': 'newDivClass', id: 'newDiv', name: 'newDivName'},
    {width: '300px', height:'200px', margin:'0 auto', border:'1px solid #DDD'}, 
    'Add contents here');

}