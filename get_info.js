window.onload = function(){
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, 
    function(tabs){
        document.getElementById('url').value = tabs[0].url;
        document.getElementById('title').value = tabs[0].title;
    })
                
}


