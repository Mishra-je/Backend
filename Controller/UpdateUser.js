const userModel = require("../Model/UserModel");

async function UpdateUser(req, res) {
  try {
    const sessionUser = req.userId;
    const { userId, name, email, role } = req.body;
    const payload = {
      ...(email && { email: email }),
      ...(name && { name: name }),
      ...(role && { role: role }),
    };

    const user = await userModel.findById(sessionUser);
    const updateUser = await userModel.findByIdAndUpdate(userId,payload);

    res.json({
      data: updateUser,
      message: "User Updated",
      success: true,
      error: false,
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = UpdateUser;
