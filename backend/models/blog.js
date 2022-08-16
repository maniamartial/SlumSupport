const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    //enter the entities
    category: {
      type: String,
      required: [false, "Please add new category"],
    },
    title: {
      type: String,
      required: [true, "Kindly enter the article's title"],
    },
    meta_description: {
      type: String,
      required: [true, "Enter meta-escription, between 120-150 words only"],
    },
    keywords: {
      type: String,
      requred: [false, "Kindly enter some false"],
    },
    content: {
      type: String,
      required: [true, "Add some unique content"],
    },
    tags: {
      type: String,
      required: [false, "Add tags related to your posts"],
    },
  },
  {
    timestamps: true,
  }
);

//export to b e used in other files
module.exports = mongoose.model("Blog", blogSchema);
