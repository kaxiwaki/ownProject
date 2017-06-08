const pool=require('./DBpool');

module.exports={
  //验证用户输入的手机号,是否已经存在
  phone:(req,res)=>{
    "use strict";
    req.on('data',(buf)=>{
      var obj=qs.parse(buf.toString());
      pool.getConnection((err,conn)=>{
        conn.query('SELECT * FROM user WHERE uphone=?',[obj.phone],(err,result)=>{
          if(result.length>0){
            var output={
              code:1,
              msg:'该用户已存在'
            };
          }else{
            var output={
              code:2,
              msg:'可以注册'
            };
          }
          res.json(output);
          conn.release();
        })
      })
    })

  },
  //用户注册
  register:(req,res)=>{
    "use strict";
    console.log('111');
    req.on('data',(buf)=>{
      var obj=qs.parse(buf.toString());
      pool.getConnection((err,conn)=>{
        conn.query('INSERT INTO user VALUES(null,?,?,?)',[obj.uname,obj.upwd,obj.uphone],(err,result)=>{
          var output={
            code:1,
            uid:result.insertId
          };
          res.json(output);
          conn.release();
        })
      })
    })
  },
  //用户登录
  login:(req,res)=>{
    "use strict";
    console.log(req.query);
    var uname=req.query.name;
    var upwd=req.query.upwd;
    pool.getConnection((err,conn)=>{
      conn.query('SELECT * FROM user WHERE uname=? or uphone=? and upwd=?',[uname,uname,upwd],(err,result)=>{
        if(result.length>0){
          var output={
            code:1,
            msg:'登录成功',
            uid:result[0].uid
          }
        }else{
          var output={
            code:2,
            msg:'用户名或密码错误',
          }
        }
        res.json(output);
        conn.release(); ''
      })
    })
  }
}
