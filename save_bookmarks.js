// callback function for add-button Listener, Place your bookmarker 
// need to find a way to get title and x and y coordinates
function add_bookmark(){
    // turn on listener for document click
    alert("The button was clicked.");
    document.addEventListener('click', function(event){
        console.log(event.target);
        alert("The page was clicked.");
        var new_bookmark = {'x_coord': event.clientX, 
            'y_coord': event.clientY};
        console.log("x_coord: " + x_coord + " y_coord: " + y_coord);
        // sent bookmark to local data
        localStorage.setItem('new_bookmark', JSON.stringify(new_bookmark));
    });
}

// localData =  JSON.parse(localStorage.getItem('title'));
// document.getElementById('add-button').addEventListener('click', add_bookmark);
