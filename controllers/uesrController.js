const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//@desc Register a user
//@route POST /users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered");
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword)
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    if(user){
        res.status(201).json({
            _id: user.id,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error("User data is not valid");
    }
    res.json({message: "Resgister the user"});
});


//@desc login user
//@route POST /users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const user = await User.findOne({email});
    console.log(req.body, user.email)
    // compare password with hashedPassword
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user:{
                username: user.username,
                email: user.email,
                id: user.id,
            },
        }, 
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "15m"}
        );
        res.status(200).json({accessToken})
    }else{
        res.status(401);
        throw new Error("Invalid crendentials");
    }
});


//@desc gets current user info
//@route Get /users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});



//@desc delete user info
//@route Delete /users/:id
//@access private
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404);
        throw new Error("user not found")
    }
    await User.deleteOne();
    res.status(200).json(user);
});



//@desc get all registerd users
//@route Get /users/
//@access private
const users = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json({users});
});


module.exports = {registerUser, loginUser, currentUser, deleteUser, users}