const bcrypt = require('bcrypt');
const connection= require('../database/config/connection')



const hashPassword =(reqbody)=>{
    return hashbass=bcrypt.hash(reqbody.password, 10)
        .then(hashbass=>{
            const sql={
                text :'INSERT INTO userstable (user_name ,email ,password) values ($1 ,$2 ,$3)',
                values :[reqbody.user_name,reqbody.email,hashbass]
            }
            return connection.query(sql,(err,res)=>{
                if(err) throw err;
                else console.log('user added')
            })})
        .catch(err=>console.log(err))
} 

const comparepass =(reqbody,response)=>{
    return bcrypt.compare(reqbody.password ,response[0].password)
}



module.exports = {hashPassword ,comparepass}