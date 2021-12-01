import mongoose from 'mongoose'
import bcrrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
    },
    phoneNumber:{
        type: String,
        required:true
    },
    company:{
        type: String,
        required:true
    },
    title:{
        type: String,
        required:true
    },
},{
    timestamp:true

})





const User =mongoose.model('User', userSchema)

export default User