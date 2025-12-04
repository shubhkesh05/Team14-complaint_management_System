const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req,res)=>{
  try{
    const {name,email,password,role} = req.body;
    const exists = await User.findOne({email});
    if(exists) return res.status(400).json({message:'Email exists'});
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({name,email,passwordHash:hash,role});
    res.json({id:user._id, email:user.email});
  }catch(e){ res.status(500).json({message:e.message}); }
});

router.post('/login', async (req,res)=>{
  try{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(401).json({message:'Invalid'});
    const ok = await bcrypt.compare(password, user.passwordHash);
    if(!ok) return res.status(401).json({message:'Invalid'});
    const token = jwt.sign({id:user._id, role:user.role, name:user.name}, process.env.JWT_SECRET||'secret', {expiresIn:'7d'});
    res.json({token, user:{id:user._id,name:user.name,email:user.email,role:user.role}});
  }catch(e){ res.status(500).json({message:e.message}); }
});

module.exports = router;
