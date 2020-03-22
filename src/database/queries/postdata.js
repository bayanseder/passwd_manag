const connection = require('../config/connection');

const postuser = (reqbody,callback)=>{
    const sql={
        text :'INSERT INTO userstable (user_name ,email ,password) values ($1 ,$2 ,$3)',
        values :[reqbody.user_name,reqbody.email,reqbody.password]
    }
    return connection.query(sql,(err,res)=>{
        if(err) throw err;
        else console.log('user added')
    })

}

module.exports= postuser;
