const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userCtrl = {
    register: async(req,res) => {
        try{
            console.log("inside try block");
            const {name,email,password} = req.body;

            const user = await Users.findOne({email})
            if(user){
                console.log("inside If user")
                return res.status(400).json({msg:"Email Already Registered"})
            }

            if(password.length < 6){
                return res.status(400).json({msg:"Password is at least 6 character"})
            }
            //Pasword ENCRYPTION
            const passwordHash = await bcrypt.hash(password,10)

            //Save on MongoDB Cloud (Atlas)
            const newUser = new Users({
                name,email,password:passwordHash
            })
            await newUser.save();

            //JWT Token to AUTHENTICATE
            const accesstoken = createAccessToken({id:newUser._id})
            const refreshtoken = createRefreshToken({id:newUser._id})

            res.cookie('refreshtoken', refreshtoken,{
                httpOnly:true,
                path:'/user/refresh_token'
            })
            
            res.json({accesstoken});

        }
        catch(err){
            return res.status(500).json({msg:err.message});
        }
    },
    refreshtoken: async(req,res) => {
        try{
            const rf_token = req.cookies.refreshtoken;

        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
}

const createAccessToken = (payload) => {
    return jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1d'})
}
const createRefreshToken = (payload) => {
    return jwt.sign(payload,process.env.REFRESH_TOKEN_SECRET,{expiresIn:'7d'})
}
module.exports = userCtrl;