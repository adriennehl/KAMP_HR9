chrome.runtime.onInstalled.addListener(function(){
    alert("this is the background script");
});

var coords1, coords2;
function runContentScript(){
    chrome.tabs.executeScript({file: 'main.js'});
}

chrome.runtime.onMessage.addListener(
    function(request, sender) {
    var coords = JSON.parse(request);
    coords1 = coords.x_coord;
    coords2 = coords.y_coord;
    });

function gotoURL(xpos, ypos, url){
    chrome.tabs.executeScript({file: 'main3.js'});
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, JSON.stringify({"x_coord": xpos, "y_coord": ypos, "url": url}), function(response) {
        console.log(response.farewell);
    });
  });
}

function gotoURL2(xpos, ypos, url){
  chrome.tabs.executeScript({file: 'main2.js'});
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, JSON.stringify({"x_coord": xpos, "y_coord": ypos, "url": url}), function(response) {
      console.log(response.farewell);
    });
  });
}

//  chrome.tabs.sendMessage(JSON.stringify({"x_coord": xpos, "y_coord": ypos, "url": url}));
// tells content script to scroll
/***chrome.commands.onCommand.addListener(function (command) {
    if (command == "scroll") {
      chrome.tabs.query(
        {currentWindow: true, active: true}, 
        (tabs) => { chrome.tabs.sendMessage(tabs[0].id, { text: 'scroll' }); }
      )
    }
  });***/
