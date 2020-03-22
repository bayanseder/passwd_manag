const {Pool}=require('pg');
require('env2')('config.env');

const connection = process.env.db_url;


module.exports= new Pool({
    connectionString : connection ,
    ssl :!connection.includes('localhost')
});