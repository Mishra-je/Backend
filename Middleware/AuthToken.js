const jwt = require('jsonwebtoken')

async function  Authtoken(req,res,next) {
    try {
        const tokens = req.cookies?.token 
        if(!tokens){
            return res.status(200).json({
            message : "User not Login",
            error:true,
            success:false
           })
        }
        jwt.verify(tokens, process.env.TOKENSECRET_KEY, function(err, decoded) {
            console.log(err) 
            console.log(decoded)

            if(err){
                console.log("Error",err)
            }

            req.userId = decoded?._id

            next()
          })


        // console.log("Token      - ",token)
    } catch (err) {
        res.status(400).json({
            message  : err.message || err,
            data :[],
            error:true,
            success : false
        })
    }
}

module.exports = Authtoken;