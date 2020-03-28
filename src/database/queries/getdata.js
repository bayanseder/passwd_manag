const connection = require('../config/connection');

const getuser = (reqbody,callback)=>{
    const sql ={
        text : 'select * from userstable where email=$1',
        values :[reqbody.email]
    }
  return connection.query(sql,(err,res)=>{
      if(err){
        return callback(err)
      }
      else{
        return callback(null,res.rows)
      }
  })
} ;


module.exports= getuser;