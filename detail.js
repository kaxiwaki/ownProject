const pool = require('./DBpool');
const qs = require('querystring');
module.exports = {
  items: (req, res) => {
    console.log('链接成功！')
    let sid = req.params.sid;
    pool.getConnection((err, conn) => {
      conn.query('SELECT * FROM s_product WHERE sid=?', [sid], (err, data) => {
        res.json(data);
        conn.release();
      })
    })
  },
  addOrder: (req, res) => {
    console.log('开始加入购物车~');
    let sid = req.query.sid,
      uid = req.query.uid,
      opayed = req.query.opayed,
      now = new Date().getTime();
    pool.getConnection((err, conn) => {
      conn.query('INSERT INTO uorder VALUES(null,?,?,?,?)', [uid, sid, now, opayed], (err, data) => {
        if (err) {
          console.log('get error');
          res.json({ "msg": 2 });  
        } else {
          console.log(data);
          res.json({ "msg": 1, "oid": data.insertId });
        }
        conn.release();
      })
    })
  }

};