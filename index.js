const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const path = require("path");
const { v4 : uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    "id":uuidv4(),
    "username":"@mudassir",
    "content":"mud is in btech clg"
  },
  {
    "id":uuidv4(),
    "username":"@syed",
    "content":"syed is in btech clg"
  }
];
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new",(req,res) =>{
  res.render("new.ejs")
});

app.post("/posts",(req,res)=>{
  let {username,content} = req.body ;
  let id = uuidv4();
  posts.push({id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
  let {id} = req.params ;
  let post = posts.find((p)=> id === p.id);
  res.render("show.ejs",{ post})
});

app.patch("/posts/:id",(req,res)=>{
  let {id} = req.params ;
  let contentNew = req.body.content ;
  let post = posts.find((p)=> id === p.id);
  if(!post) {
 return res.status(404).send("Post not found")
  };
  post.content = contentNew ;
  res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
  let {id} = req.params ;
  let post = posts.find((p)=> id === p.id);
  if(!post) {
 return res.status(404).send("Post not found")
  };
  res.render("edit.ejs",{ post });
});

app.post("/posts/:id/delete",(req,res)=>{
  try{
  const {id} = req.params;
  posts=posts.filter((p)=>{
    return p.id !=id;
  })
  res.redirect("/posts");
  }catch(err){
    console.log(err);
    req.status(500).send("Error deleting post");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});