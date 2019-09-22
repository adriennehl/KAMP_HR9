// callback function for add-button Listener, Place your bookmarker 
// need to find a way to get title and x and y coordinates
$(function(){
    $("#add-button").click(function(){
        alert("The button was clicked.");
        document.addEventListener('dblclick', save_bookmark);
    });

    $("#submit").click(function(){
        alert('it works!');
        url = document.getElementById("url").value;
        title = document.getElementById("title").value;
        keywords = document.getElementById("keywords").value;
        notes = document.getElementById("notes").value;
        xpos = document.getElementById("x-position").value;
        ypos = document.getElementById("y-position").value;
        time = document.getElementById("date").value;
        var submission = {'url': url, 'title': title, 'keywords': keywords, 'notes': notes, "xpos": xpos,
        "ypos": ypos};
        localStorage.setItem(time, JSON.stringify(submission));
        console.log(localStorage);
    });
});


function save_bookmark(event){
    console.log(event.target);
    alert("The page was clicked.");
    var new_bookmark = {'x_coord': event.clientX, 
        'y_coord': event.clientY};
    console.log("x_coord: " + new_bookmark.x_coord + " y_coord: " + new_bookmark.y_coord);
    var dt = new Date();
    document.getElementById("date").value = dt.toISOString();
    document.getElementById("x-position").value = new_bookmark.x_coord;
    document.getElementById("y-position").value = new_bookmark.y_coord;
    document.removeEventListener('dblclick', save_bookmark);
}

