const Category = require('../models/categoryModel')

const categoryCtrl = {

    getCategories: async(req,res) => {
        try{
            const categories = await category.find()
            res.json(categories)
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    createCategory: async(req,res) => {
        try{
            const {name} = req.body;
            const category = await Category.findOne({name})

            if(category){
                return res.status(400).json({msg:"Category Already Exists"})
            }

            const newCategory = new Category({name})
            await newCategory.save()

            res.json({msg:"Category Created"})
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    deleteCategory: async(req,res) => {
        try{
            await Category.findByIdAndDelete(req.params.id)
            res.json({msg:"Deleted Category"})
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    updateCategory: async(req,res) => {
        try{
            const {name} = req.body
            await Category.findByIdAndUpdate({_id:req.params.id},{name})

            res.json({msg:"Category Updated"})
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
}

module.exports = categoryCtrl