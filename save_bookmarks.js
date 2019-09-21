// callback function for add-button Listener, Place your bookmarker 
// need to find a way to get title and x and y coordinates
function add_bookmark(event){
    // turn on listener for paragraph click
    $("p").click(function(){
        alert("The paragraph was clicked.");
        // $(this).slideUp();
        // create a new bookmark object
        var new_bookmark = {'title': title, 'x_coord': event.clientX, 
            'y_coord': event.clientY};
        console.log("x_coord: " + x_coord + " y_coord: " + y_coord);
        // sent bookmark to local data
        localStorage.setItem(title, JSON.stringify(new_bookmark));

    });

    // localData =  JSON.parse(localStorage.getItem('title'));
}
var addButton = document.getElementById("add-button")
addButton.addEventListener('click', add_bookmark)
