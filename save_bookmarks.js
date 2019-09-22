// callback function for add-button Listener, Place your bookmarker 
// need to find a way to get title and x and y coordinates
$(function(){
    $("#add-button").click(function(){
        alert("The place your bookmarker button was clicked.");
        var bgPage = chrome.extension.getBackgroundPage();
        bgPage.runContentScript();
    });

    $("#submit").click(function(){
        alert('submit the bookmark!');
        var bgPage = chrome.extension.getBackgroundPage();
        save_bookmark(bgPage.coords1, bgPage.coords2);
        var dt = new Date();
        document.getElementById("date").value = dt.toISOString();
        url = document.getElementById("url").value;
        title = document.getElementById("title").value;
        keywords = document.getElementById("keywords").value;
        notes = document.getElementById("notes").value;
        xpos = document.getElementById("x-position").value;
        ypos = document.getElementById("y-position").value;
        time = document.getElementById("date").value;
        var submission = JSON.stringify({'url': url, 'title': title, 'keywords': keywords, 'notes': notes, "xpos": xpos,
        "ypos": ypos});
        alert(submission);
        localStorage.setItem(time, submission);
    });
});


function save_bookmark(x_coord, y_coord){
    //console.log(event.target);
    //alert("The page was clicked.");
    //var new_bookmark = {'x_coord': event.clientX, 
    //    'y_coord': event.clientY};
    var new_bookmark = {'x_coord': x_coord, 
        'y_coord': y_coord};
    document.getElementById("x-position").value = new_bookmark.x_coord;
    document.getElementById("y-position").value = new_bookmark.y_coord;
    // document.removeEventListener('dblclick', save_bookmark);
}

