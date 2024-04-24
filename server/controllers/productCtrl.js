const productCtrl = {
    
    getProducts: async(req,res) => {
        try{

        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    },

    createProduct: async(req,res) => {
        try{

        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
}

module.exports = productCtrl