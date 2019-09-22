// callback function for add-button Listener, Place your bookmarker 
// need to find a way to get title and x and y coordinates
$(function(){
    $("#add-button").click(function(){
        alert("The place your bookmarker button was clicked.");
        //document.addEventListener('dblclick', save_bookmark);
        x_coord = window.pageXOffset;
        y_coord = window.pageYOffset;
        alert("x_coord: " + x_coord + " y_coord: " + y_coord);
        save_bookmark(x_coord, y_coord);
    });

    $("#submit").click(function(){
        alert('submit the bookmark!');
        var dt = new Date();
        document.getElementById("date").value = dt.toISOString();
        url = document.getElementById("url").value;
        title = document.getElementById("title").value;
        keywords = document.getElementById("keywords").value;
        notes = document.getElementById("notes").value;
        xpos = document.getElementById("x-position").value;
        ypos = document.getElementById("y-position").value;
        time = document.getElementById("date").value;
        var submission = {'url': url, 'title': title, 'keywords': keywords, 'notes': notes, "xpos": xpos,
        "ypos": ypos};
        alert(submission + url + title + keywords + notes + xpos +ypos);
        localStorage.setItem(time, JSON.stringify(submission));
        console.log(localStorage);
    });
});


function save_bookmark(x_coord, y_coord){
    //console.log(event.target);
    //alert("The page was clicked.");
    //var new_bookmark = {'x_coord': event.clientX, 
    //    'y_coord': event.clientY};
    var new_bookmark = {'x_coord': x_coord, 
        'y_coord': y_coord};
    console.log("x_coord: " + new_bookmark.x_coord + " y_coord: " + new_bookmark.y_coord);
    document.getElementById("x-position").value = new_bookmark.x_coord;
    document.getElementById("y-position").value = new_bookmark.y_coord;
    // document.removeEventListener('dblclick', save_bookmark);
}

