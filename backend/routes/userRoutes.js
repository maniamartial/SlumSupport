const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getMyPost,
} = require("../controllers/userController");

//import functionalities and give them the APIs
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/myposts", getMyPost);

module.exports = router;
