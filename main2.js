chrome.runtime.onMessage.addListener(
    function(request) {
    alert("message recieved");
    var info = JSON.parse(request);
    x_coord = info.x_coord;
    y_coord = info.y_coord;
    url = info.url;
    window.location.assign(url);
    window.scrollTo(x_coord, y_coord);
});