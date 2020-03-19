const fs = require('fs');
const connection = require('./connection');
const path = require('path');

const buildDB = (cb)=>{
    const userTable=fs.readFileSync(path.join(__dirname,'build.sql')).toString();
    return connection.query(userTable)
            .then((res)=>console.log('yeah ... done'))
            .catch((err)=>console.log(err))
};

buildDB();