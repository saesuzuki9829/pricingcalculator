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
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    isAdmin:{
        type: Boolean,
        required:true,
        default:false
    }
},{
    timestamp:true

})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next){
    if (!this.isModified('password')){
        next()
    }

    const salt = await bcrrypt.genSalt(10)
    this.password = await bcrrypt.hash(this.password, salt)
})

const User =mongoose.model('User', userSchema)

export default User