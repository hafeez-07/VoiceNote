import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });
  res.cookie("token", token, {
    sameSite: "strict",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
};
