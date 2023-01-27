// ========= PAGES CONTENT =========

exports.HOME_CONTENT = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
exports.ABOUT_CONTENT = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
exports.CONTACT_CONTENT = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";



// ====== POSTS SAVING VARIABLES ======

const posts = [];
var nextPostId = 0;




// ===== POST MANAGEMENT FUNCTIONS =====

function addPost (title, body) {
    posts.push({
        id: nextPostId,
        title: title,
        body: body
    });
    
    nextPostId++;
}

function getPostByTitle (title) {
    return posts.find(post => post.title.toLowerCase() === title.toLowerCase());
}

function getPostById (id) {
    return posts.find(post => post.id === id);
}



// ========= TEST POSTS =========

addPost("Chiguagua","blanco");
addPost("Caniche","blanco");
addPost("BullDog","blanco");


// =========== EXPORTS ===========

exports.posts = posts;

exports.addPost = addPost;
exports.getPostByTitle = getPostByTitle;
exports.getPostById = getPostById;
