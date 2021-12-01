import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'


// @desc    AuthUser & get token
// @router  POST/api/users/login
// @access  Public
const authUser =asyncHandler(async(req, res) => {
    const { _id } = req.body

    const user = await User.findOne({_id})

    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            company:user.company,
            phoneNumber:user.phoneNumber,
            title: user.title
        })
    } else {
        res.status(401)
        throw new Error('Invalid')
    }
})


// @desc    Register a new user
// @router  POST/api/users
// @access  Public
const registerUser =asyncHandler(async(req, res) => {
    const { name, email, title, company, phoneNumber} = req.body

    const user = await User.create({
        name,
        email,
        title,
        company,
        phoneNumber
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            company:user.company,
            phoneNumber:user.phoneNumber,
            title: user.title
        })
    } else{
        res.status(400)
        throw new Error('Invalid user data')
    }
       
})

// @desc    Get user profile
// @router  GET /api/users/profile
// @access  Private
const getUserProfile =asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)

    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            company:user.company,
            phoneNumber:user.phoneNumber,
            title: user.title
        })
    } else{
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc    Update user profile
// @router  PUT /api/users/profile
// @access  Private
const updateUserProfile =asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)

    if(user){
        user.name =req.body.name || user.name
        user.email = req.body.email || user.email
        user.title = req.body.titile || user.titile
        user.company = req.body.company || user.company
        user.phoneNumber = req.body.phoneNumber || user.phoneNumber

        const updatedUser = await user.save()
        
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            
          })
        
    } else{
        res.status(404)
        throw new Error('User not found')
    }
})


export{ authUser, registerUser, getUserProfile, updateUserProfile}