// when bookmark represented by an element with the title of the bookmark is clicked, 
// takes user to the correct location
function move_to_page(event){
    title = event.target.title
    //find a way to get title
    bookmark =  JSON.parse(localStorage.getItem(title));
    url = bookmark.url;
    // navigate to the proper URL
    window.open(url);
    // scroll to the proper place on the page
    window.scroll(x_coord, y_coord);
}