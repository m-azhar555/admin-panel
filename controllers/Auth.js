const userModel = require("../models/User")
const bcrypt = require('bcryptjs');

const register = async(req, res)=>{
    try {
        const {username,password,email} =req.body
        console.log(req.body);
        const existUser = await userModel.findOne({email})
        if(existUser){
            return res.status(402).json({success:false,message:'User already exist please login '})

        }
        const hasehedPassword = await bcrypt.hashSync(password,10);
        const newUser = new userModel({
            username,email,password:hasehedPassword
        })
        await newUser.save();
        return res.status(201).json({success:true,message:'User registered successfully',user:newUser })
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}
const login = async(req,res)=>{
    try {
        const{email,password}=req.body
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).json({success:false,message:"User not found please register"})

        }
        const isVallidpassword = await bcrypt.compare(password,user.password)
        if(!isVallidpassword){
            return res.status(400).json({success:false,message:"wrong password"})
        }
        return res.status(200).json({success:true,message:"User login successflly",user})
    } catch (error) {
        console.log('login error', error)
        return res.status(400).json({success:false,message:"internl server error"})
        
    }
}
module.exports = {register,login};