chrome.runtime.onInstalled.addListener(function(){
    alert("this is the background script");
});

var coords1, coords2;
function runContentScript(){
    chrome.tabs.executeScript({file: 'main.js'});
}

chrome.runtime.onMessage.addListener(
    function(request) {
    var coords = JSON.parse(request);
    alert(coords.y_coord);
    coords1 = coords.x_coord;
    coords2 = coords.y_coord;
    });
// tells content script to scroll
/***chrome.commands.onCommand.addListener(function (command) {
    if (command == "scroll") {
      chrome.tabs.query(
        {currentWindow: true, active: true}, 
        (tabs) => { chrome.tabs.sendMessage(tabs[0].id, { text: 'scroll' }); }
      )
    }
  });***/
