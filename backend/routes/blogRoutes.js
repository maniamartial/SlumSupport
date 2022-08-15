const express = require("express");
const router = express.Router();

const {
  createPost,
  updatePost,
  deletePost,
  getPosts,
  getPost,
  getTags,
} = require("../controllers/blogController.js");

//getposts
router.get("/", getPosts);

//get single posts
router.get("/:id", getPost);

//create new post
router.put("/", createPost);

//updost);
router.put("/:id", updatePost);

//delete post
router.delete("/:id", deletePost);

//exports
module.exports = router;
