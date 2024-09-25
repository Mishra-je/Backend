const userModel = require("../Model/UserModel");

async function AllUser(req,res){
    try {
        console.log("UserId all-user",req.userId)
        const AllUser = await userModel.find()
        res.json({
            message: "All User Details",
            data : AllUser,
            success: true,
            error:false,
            
        })
    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
          });
    }
}

module.exports = AllUser