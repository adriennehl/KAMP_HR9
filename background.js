chrome.runtime.onInstalled.addListener(function(){
    alert("this is the background script");
});

function runContentScript(){
    chrome.tabs.executeScript({file: 'main.js'});
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
