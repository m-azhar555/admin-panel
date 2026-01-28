const mongoose = require('mongoose');


const DbCon = async(uri)=>{
    try {
        await mongoose.connect(uri)
        console.log('MONGODB is connected')
    } catch (error) {
        console.log('mongodb connection error',error)

    }
}

module.exports = DbCon;