chrome.runtime.onMessage.addListener(
    function(request) {
//    alert("message recieved");
//    alert(request);
    var info = JSON.parse(request);
    x_coord = info.x_coord;
    y_coord = info.y_coord;
    url = info.url;
    //alert("x_coord " + x_coord + " y_coord " + y_coord + " url " + url);
    window.location.assign(url);
    
});