import User from "../models/userModel.js";

export const getUser = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({
        error: "Unauthorized",
      });
    }

    const user = await User.findById(userId).select(
      "_id username email fullname",
    );

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
