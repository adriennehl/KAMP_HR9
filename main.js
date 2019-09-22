x_coord = window.pageXOffset;
y_coord = window.pageYOffset;
alert("cs: x_coord: " + x_coord + " y_coord: " + y_coord);
// save_bookmark(x_coord, y_coord);

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