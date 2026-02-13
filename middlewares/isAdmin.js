

const isAdmin = async(req,res,next)=>{
    try {
        const token=req.cookies.token
        console.log(token)

    } catch (error) {
        
    }
}

module.exports = isAdmin;