const mysql=require('mysql');
module.exports=mysql.createPool({
  host: '127.0.0.1',    //数据库服务器地址
  database:'hjw',
	user:'root',
	password:'',
	port:3306,
	connectionLimit:5
});
