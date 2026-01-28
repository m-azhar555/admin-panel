const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'

    }
},{
    timestamps:true
})

const userModel = mongoose.model('user',UserSchema)

module.exports = userModel;