const mongoose = require("mongoose")

const userShema = new mongoose.Schema({
    name:{
        type :String,
        required :true,
        minlenght:[4,'Name should be minimum of 4 characters']
    },
    email:{
        type :String,
        required :true,
        unique:true
    },
    password:{
        type :String,
        required :true,
        minlenght:[8,'password should be minimum of 8 characters']
    },
    token:{
        type : String
    }
})

const userModel = mongoose.model('user',userShema);
module.exports = userModel;