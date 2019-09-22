chrome.runtime.onInstalled.addListener(function(){
    alert("this is the background script");
});

var coords1, coords2, contentId;
function runContentScript(){
    chrome.tabs.executeScript({file: 'main.js'});
}

chrome.runtime.onMessage.addListener(
    function(request, sender) {
    var coords = JSON.parse(request);
    coords1 = coords.x_coord;
    coords2 = coords.y_coord;
    contentId = sender.tab.id;
    });

function gotoURL(xpos, ypos, url){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, JSON.stringify({"x_coord": xpos, "y_coord": ypos, "url": url}));
  });
  chrome.tabs.sendMessage(JSON.stringify({"x_coord": xpos, "y_coord": ypos, "url": url}));
}
// tells content script to scroll
/***chrome.commands.onCommand.addListener(function (command) {
    if (command == "scroll") {
      chrome.tabs.query(
        {currentWindow: true, active: true}, 
        (tabs) => { chrome.tabs.sendMessage(tabs[0].id, { text: 'scroll' }); }
      )
    }
  });***/
