const userModel = require("../models/User");


const GetUsers = async(req,res)=>{
    try {
        const users=await userModel.find()
        if(!users){
            return res.status(400).json({success:false,message:"No users found"})
        }
        return res.status(200).json({success:true,users})

    } catch (error) {
        console.log('login error',error)
        return res.status(500).json({success:false,message:"inernl server error"})
        
    }
}

module.exports = GetUsers;