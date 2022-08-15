const mongoose = require("mongoose");

//function to connect to the database
const connectToDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    //check if its connected now
    console.log(`Connected successfully ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

//export to be used in external modules
module.exports = connectToDb;
