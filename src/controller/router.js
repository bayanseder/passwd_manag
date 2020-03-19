const express=require('express');
const bcrypt=require('bcrypt');
const app=require('../app')
const path=require('path');
const router =express.Router();
const bodyParser=require('body-parser')

router.use(bodyParser.urlencoded({extended: false}))
router.use(express.static(path.join(__dirname,'..','..','public')))






module.exports=router