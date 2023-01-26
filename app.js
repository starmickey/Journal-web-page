// ============== REQUIRE MODULES ==============

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const content = require(__dirname + "/content.js");



// ============= CONFIG EXPRESS APP =============

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



// =============== EVENT MANAGERS ===============

app.get("/", function (req, res){
  res.render("home", {homeContent: content.HOME_CONTENT, posts: content.posts});
});

app.get("/about", function (req, res) {
  res.render("about", {aboutContent: content.ABOUT_CONTENT});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: content.CONTACT_CONTENT});
});

app.get("/compose", function(req,res){
  res.render("compose");
});

app.post("/compose", function (req, res) {
  content.addPost(req.body.postTitle, req.body.postBody);
  res.redirect("/");
});

app.get("/:postTitle", function (req, res) {
  const post = content.getPostByTitle(req.params.postTitle);
  if (post !== undefined) {
  res.render("post", {postTitle: post.title, postBody: post.body});
    
  } else {
  res.render("post-not-found");
  }
});




// ================ PORT LISTENERS ================

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
