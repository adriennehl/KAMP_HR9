// creates a folder with the title Where am I? bookshelf
// parentId specifies properties of the new folder
// function(newFolder) defines function to be executed after the folder is created
chrome.bookmarks.create({'parentId': bookmarkBar.id,
                               'title': 'Where am I? bookshelf'});

// callback function for add-button Listener 
// need to find a way to get title and x and y coordinates
function add_bookmark(){
    // ask for user to input title of new bookmark

    // get x and y coordinates

    var new_bookmark = {'title': title, 'x_coord': x_coord, 
                        'y_coord': y_coord};

    localStorage.setItem(title, JSON.stringify(new_bookmark));
    // localData =  JSON.parse(localStorage.getItem('title'));
}
var addButton = document.getElementById("add-button")
addButton.addEventListener('click', add_bookmark)
