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
            getdata(reqbody,(err,response)=>{
                if(err){
                    return res.status(500).send('server error')
                }
                else if(response[0]==undefined){
                return res.status(400).json({message : 'data not found'})
                }    
                else{
                if(hashing.comparepass(reqbody,response)===true){
                return res.status(200).json({message : 'sucsses... yeah!'})}
                else { res.send('wrong password')}
                }
            })
        }
    })

router.post('/signup',(req,res)=>{
    const reqbody=req.body;
    validation.inputvalid(reqbody);
    if(validation.inputvalid(reqbody)===false){
        res.status(500).send('error in validation')
    }
    else{
        hashing.hashPassword(reqbody)
        res.redirect('/')
    }
})





module.exports=router