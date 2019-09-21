//文档加载完成事件
$(function(){
    //绑定点击事件
    $("#btn1").click(function(){
        $("#div1").after("<font color='red' size='7'>Test</font>");
    });
});