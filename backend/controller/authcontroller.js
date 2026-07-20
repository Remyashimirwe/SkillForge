const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const signToken = (id)=>{
    return jwt.sign(
        { id },
        process.env.JWT_SECRET || "default_jwt_secret",
        { expiresIn : "7d"}
    );
}

const register = async (req,res)=>{
    try{
        const { username, email, password } = req.body;
        const displayName = username;

        if(!displayName || !email || !password){
            return res.status(400).json({message :"username, email, and password are required."});
        }

        const existingUser = await User.findOne({ email: email.toLowerCase().trim() });
        if(existingUser){
            return res.status(400).json({message:"Email already exists."});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
          username: displayName,
          email: email.toLowerCase().trim(),
          password: hashedPassword,
       });
       
        await user.save();
        const token = signToken(user._id);
        res.status(201).json({
           token,
           user: {
             id: user._id,
             username: user.username,
             email: user.email,
             createdAt: user.createdAt,
           },
        });
    } catch(error) {
        res.status(500).json({message:error.message});
    }
};

const login = async (req,res)=>{
    try{
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({message:"Email and password are required."});
        }

        const user = await User.findOne({ email: email.toLowerCase().trim() });
        if(!user){
            return res.status(404).json({message: "User not found. Please sign up."});
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({message:"Invalid email or password."});
            window.alert("invalid username or password");
        }

        const token = signToken(user._id);
        res.json({
          token,
          user: {
            id:user._id,
            username:user.username,
            email:user.email,
            createdAt:user.createdAt,
          },
        });
    } catch(error){
          res.status(500).json({message:error.message});
    }
};

module.exports = {register , login}