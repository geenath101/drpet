const express = require('express');
const passport = require('passport');
const jwt =  require('jsonwebtoken');

const User = require('../models/user');

const router = express.Router();

router.post('/register',(req,res,next)=>{
	var newUser = new User({
		name:req.body.name,
		email:req.body.email,
		username:req.body.username,
		password:req.body.password
	});
	//console.log(User);
	//console.log(newUser);
	console.log(typeof User.addUser==="function")
	User.addUser(newUser,function(err,user){
		if(err){
			res.json({
				success:false,
				msg:'failed to register user'
			});
		}else{
			res.json({
				success:true,
				msg:'User registered'
			});
		}
	});
});

router.post('/authenticate',(req,res,next)=>{
	res.send('authenticate');
});

router.get('/profile',(req,res,next)=>{
	res.send('profile');
});
module.exports = router;
