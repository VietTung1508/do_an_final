const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useUnifiedTopology: true,
    });
    console.log("connect to db");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
