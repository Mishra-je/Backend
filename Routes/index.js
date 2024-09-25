const express = require('express')
const router = express.Router();
const useSignin = require('../Controller/Signin');
const SignupController = require('../Controller/Signup');
const UserDetailsController = require('../Controller/UserDetails');
const Authtoken = require('../Middleware/AuthToken');
const Logout = require('../Controller/Logout');
const AllUser = require('../Controller/AllUser');
const UpdateUser = require('../Controller/UpdateUser');



router.post("/signup",SignupController)
router.post("/signin",useSignin)
router.get("/user-details",Authtoken,UserDetailsController)
router.get("/logout",Logout)

//Admin pannel 

router.get("/all-user",Authtoken,AllUser)
router.post("/update-user",Authtoken,UpdateUser)


module.exports = router
