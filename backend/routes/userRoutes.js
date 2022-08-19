const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getMyPost,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
//import functionalities and give them the APIs
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/myposts", protect, getMyPost);

module.exports = router;
