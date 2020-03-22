const express=require('express');
const bcrypt=require('bcrypt');
const app=require('../app')
const path=require('path');
const router =express.Router();
const bodyParser=require('body-parser');
const getdata = require('../database/queries/getdata');
const validation = require('../controller/validation');
const hashing = require('../controller/hashing')


router.use(bodyParser.urlencoded({extended: false}))
router.use(express.static(path.join(__dirname,'..','..','public')))
router.post('/signin',(req,res)=>{
    const reqbody = req.body;
    const {error}=validation.signinvalid(reqbody);
    
        if(error){
            return res.status(400).json({message : error.toString()})
        }
        else{
            getdata.getuser(reqbody,(err,res)=>{
            if(err){
                return res.status(400).join({message : 'some error in post'})
            }    
            else{
                return res.status(200).join({message : 'sucsses... yeah!'})
            }
            })
        }
    })

router.post('/signup',(req,res)=>{
    const reqbody=req.body;
    validation(reqbody);
    if(validation.inputvalid(reqbody)===false){
        res.status(500).send('error in validation')
    }
    else{
        hashing(reqbody)
        res.redirect('/')
    }
})





module.exports=router