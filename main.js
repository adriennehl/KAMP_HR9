x_coord = window.pageXOffset;
y_coord = window.pageYOffset;
// display x and y coord to screen 
// alert("cs: x_coord: " + x_coord + " y_coord: " + y_coord);

// send x_coord and y_coord to save_bookmarks
function save_bookmark(x_co, y_co){
    var new_bookmark = {'x_coord': x_co, 
        'y_coord': y_co};
    //document.getElementById("x-position").value = new_bookmark.x_co;
    //document.getElementById("y-position").value = new_bookmark.y_co;
    chrome.runtime.sendMessage(JSON.stringify({"x_coord": x_co, "y_coord": y_co}));
}

save_bookmark(x_coord, y_coord);

// main.js
/***
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.text) {
      switch (msg.text) {
        case 'scroll':
          window.scrollTo(0, 500);
          break;
        default:
          sendResponse('');
      }
    }
  });
***/