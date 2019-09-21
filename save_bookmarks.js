// callback function for add-button Listener, Place your bookmarker 
// need to find a way to get title and x and y coordinates
function add_bookmark(){
    // turn on listener for document click
    alert("The button was clicked.");
    document.addEventListener('dblclick', save_bookmark);
}

function save_bookmark(event){
    console.log(event.target);
    alert("The page was clicked.");
    var new_bookmark = {'x_coord': event.clientX, 
        'y_coord': event.clientY};
    document.getElementById('keywords').value = new_bookmark.x_coord;
    console.log("x_coord: " + new_bookmark.x_coord + " y_coord: " + new_bookmark.y_coord);
    var dt = new Date();
    document.getElementById("date").value = dt.toLocaleDateString();
    document.getElementById("time").value = dt.toLocaleTimeString();
    document.getElementById("x-position").value = new_bookmark.x_coord;
    document.getElementById("y-position").value = new_bookmark.y_coord;
    // sent bookmark to local data
    // localStorage.setItem('new_bookmark', JSON.stringify(new_bookmark));
    document.removeEventListener('dblclick', save_bookmark);
}

function SubmitClick(){
    alert('it works!');
    url = document.getElementById("url").value;
    title = document.getElementById("title").value;
    keywords = document.getElementById("keywords").value;
    notes = document.getElementById("notes").value;
    var submission = {'url': url, 'title': title, 'keywords': keywords, 'notes': notes};
    localStorage.setItem(title, JSON.stringify(submission));
    console.log(localStorage);
}
// localData =  JSON.parse(localStorage.getItem('title'));
//document.getElementById('add-button').addEventListener('click', add_bookmark);
