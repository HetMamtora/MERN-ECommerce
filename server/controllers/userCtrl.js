const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userCtrl = {
    
    //REGISTER USER
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

    //REFRESH TOKEN FOR REGISTERED USER
    refreshtoken: async(req,res) => {
        try{
            const rf_token = req.cookies.refreshtoken;

            if(!rf_token){
                return res.status(400).json({msg:"Please Login or Registers"})
            }

            jwt.verify(rf_token,process.env.REFRESH_TOKEN_SECRET,(err,user) => {
                if(err){
                    return res.status(400).json({msg:"Please Login or Register"})
                }
                const accesstoken = createAccessToken({id:user.id})

                res.json({user,accesstoken})
            })

        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    },

    //LOGIN
    login: async(req,res) => {
        try{
            const {email,password} = req.body;

            const user = await Users.findOne({email});
            if(!user){
                return res.status(400).json({msg:"User does not exist"});
            }

            const isMatch = await bcrypt.compare(password,user.password);
            if(!isMatch){
                return res.status(400).json({msg:"Incorrect Password"});
            }

            const accesstoken = createAccessToken({id:user._id});
            const refreshtoken = createRefreshToken({id:user._id});

            // res.cookie('refreshtoken',refreshtoken, {
            //     httpOnly:true,
            //     path:'user/refresh_token'
            // })
            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token' // <-- Absolute path
            });

            res.json({accesstoken});
        }
        catch(err){
            return res.status(500).json({msg:err.message});
        }
    },

    //LOGOUT
    logout: async(req,res) => {
        console.log("Logout endpoint reached");

        try{
            res.clearCookie('refreshtoken', { path: '/user/refresh_token' });
            return res.json({ msg: "Logged Out" });
            
            
        }
        catch(err){
            // return res.status(500).json({msg:err.message});
            console.error("Error clearing cookie:", err);
            return res.status(500).json({ msg: "Error clearing cookie" });
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