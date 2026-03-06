import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.connect("mongodb://127.0.0.1/notesApp");
    console.log("Database connected");
  } catch (err) {
    console.log("Database connection failed");
    return;
  }
};

export default connectDb;
