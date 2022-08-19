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
const { protect } = require("../middleware/authMiddleware");
//getposts
router.get("/", protect, getPosts);

//get single posts
router.get("/:id", protect, getPost);

//create new post
router.post("/", protect, createPost);

//updost);
router.patch("/:id", protect, updatePost);

//delete post
router.delete("/:id", protect, deletePost);

//exports
module.exports = router;
