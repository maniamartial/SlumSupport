const asyncHandler = require("express-async-handler");
const Blog = require("../models/blog");

// @desc get single post
//@route GET/api/post/id
//@access private
const getPost = asyncHandler(async (req, res) => {
  res.send("Here we go");
});

// @desc get All post
//@route GET/api/post/id
//@access private
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Blog.find({});
  if (!posts) {
    res.send("No posts lol");
  } else {
    res.status(200).json(posts);
    res.send("Get All Posts");
  }
});

// @desc create POST
//@route POST/api/post
//@access private
const createPost = asyncHandler(async (req, res) => {
  const { category, title, meta_description, keywords, content, tags } =
    req.body;
  console.log(category);

  try {
    const post = await Blog.create({
      category,
      title,
      meta_description,
      keywords,
      content,
      tags,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// @desc get single post
//@route POST/api/id
//@access private
const updatePost = asyncHandler(async (req, res) => {
  const post = await Blog.findById(req.params.id);
  if (!post) {
    res.status(400).json({ error: "Post not found" });
  }

  const updatingPost = await Blog.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    {
      new: true,
    }
  );
  res.status(200).json(updatingPost);
});

// @desc delete POSTs
//@route DELETE/api/post/id
//@access private
const deletePost = asyncHandler(async (req, res) => {
  const post = await Blog.findById(req.params.id);
  if (!post) {
    res.status(400).json({ error: "Post not found" });
  }
  await post.remove();
  rea.post(200).json({ id: req.params.id });

  res.send("Let us delete Posts");
});

// @desc get TAGs
//@route GET/api/POSTs/TAGs
//@access private
const getTags = asyncHandler(async (req, res) => {
  res.send("Getting frequently used tags");
});

module.exports = {
  getPost,
  getTags,
  getPosts,
  createPost,
  deletePost,
  updatePost,
};
