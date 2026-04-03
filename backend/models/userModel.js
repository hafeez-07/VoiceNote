import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    imageUrl: {
      type: String,
      default:
        "https://res.cloudinary.com/dalyf3pd9/image/upload/v1775195871/defaultProfile_msyvst.webp",
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
