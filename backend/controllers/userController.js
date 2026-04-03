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
      "_id username email fullname age",
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

export const updateUser = async (req, res) => {
  try {
    const userId = req.userId;
    console.log(userId);

    if (!userId) {
      return res.status(401).json({
        msg: "Unauthorised access",
      });
    }
    const { fullname, username, email, age } = req.body;

    //update user
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      {
        fullname,
        username,
        email,
        age,
      },
      { new: true },
    ).select("-password");
    console.log(updatedUser);

    if (!updatedUser) {
      return res.status(400).json({
        error: "Could not find user",
      });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
