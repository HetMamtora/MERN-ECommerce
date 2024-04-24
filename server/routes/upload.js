const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

const cloudinary = require('cloudinary')
const fs = require('fs')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

/*router.post('/upload',auth,authAdmin, (req,res) => {
    try{
        if(!req.files || Object.keys(req.files).length === 0){
            return res.status(400).send({msg:"No Files were Uploaded"})
        }
        console.log(req.files);

        const file = req.files.file;
        if(file.size > 1024*1024){
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg:"Size too Large"})
        }

        if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png'){
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg:"File Format not Supported"})
        }

        cloudinary.v2.uploader.upload(file.tempFilePath,{folder:"test"}, async(err,result) => {
            if (err) {
                fs.unlinkSync(file.tempFilePath); // Remove temporary file
                return res.status(500).json({ msg: "Error uploading file" });
            }
            
            //removeTmp(file.tempFilePath)
            fs.unlinkSync(file.tempFilePath);
            res.json({
                public_id:result.public_id,
                url:result.secure_url
            })
        })
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
})*/
router.post('/upload',auth,authAdmin, (req,res)=> {
    try{
         if(!req.files || Object.keys(req.files).length ===0)
         return res.status(400).send({msg: "No file were uploaded"})
        console.log(req.files)

        const file = req.files.file;
        if(file.size > 1024*1024){
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg:"Size too large"})
        } 

        if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png')
        {
        removeTmp(file.tempFilePath)
        return res.status(400).json({msg:"File format is incorrect"})
        }

         cloudinary.v2.uploader.upload(file.tempFilePath,{folder:'test'},async(err,result) => {
            if(err) throw err;

            removeTmp(file.tempFilePath)

            res.json({public_id:result.public_id,url:result.secure_url})
         })
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
})

module.exports = router