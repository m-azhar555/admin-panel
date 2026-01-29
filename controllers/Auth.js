const userModel = require("../models/User")

const register = async(req, res)=>{
    try {
        const {username,password,email} =req.body
        console.log(req.body);
        const existUser = await userModel.findOne({email})
        if(existUser){
            return res.status(402).json({success:false,message:'User already exist please login '})

        }
        const newUser = new userModel({
            username,email,password
        })
        await newUser.save();
        return res.status(201).json({success:true,message:'User registered successfully',user:newUser })
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}
module.exports = register;