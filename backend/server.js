const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const connectToDb = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;

const app = express();

connectToDb();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/posts", require("./routes/blogRoutes"));
app.use(errorHandler);
app.listen(port, () => console.log(`Access the server on port ${port}`));
