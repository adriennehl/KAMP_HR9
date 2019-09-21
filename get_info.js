window.onload = function(){
        document.getElementById('url').value =  location.href;
}

chrome.tabs.getSelected(null, function(tab) {
    var tab = tab.id;
    tabUrl = tab.url;

    alert(tab.url);
});