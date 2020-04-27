var express = require('express');
var router = express.Router();
const querySql = require('../db/index')
const {
  PWD_SALT,
  PRIVATE_KEY,
  EXPIRESD
} = require('../utils/constant')
const {
  md5
} = require('../utils/index')
const jwt = require('jsonwebtoken')


/* 注册接口. */
router.post('/register', async (req, res, next) => {
  // 获取参数
  let {
    username,
    password,
    nickname
  } = req.body
  try {
    let user = await querySql('select * from userinfo where username = ?', [username])

    if (!user || user.length === 0) {
      password = md5(`${password}${PWD_SALT}`)
      console.log(password)
      await querySql('insert into userinfo(username,password,nickname) value(?,?,?)', [username, password, nickname])
      res.send({
        code: 0,
        msg: '注册成功'
      })
    } else {
      res.send({
        code: -1,
        msg: '该账号已注册'
      })
    }
  } catch (e) {
    console.log(e)
    next(e)
  }
})
//登录接口;
router.post('/login', async (req, res, next) => {
  // 获取参数
  let {
    username,
    password,
    nickname
  } = req.body
  try {
    let user = await querySql('select * from userinfo where username = ?', [username])

    if (!user || user.length === 0) {
      res.send({
        code: -1,
        msg: '该账号不存在'
      })

    } else {
      password = md5(`${password}${PWD_SALT}`)
      console.log(typeof (password))
      let result = await querySql('select * from userinfo where username = ? and password = ?', [username, password])
      if (!result || result.length === 0) {
        res.send({
          code: -1,
          msg: '账户或密码不正确'
        })
      } else {
        //jwt(jsonwebtoken)存储进去三个参数，用户名，密钥，过期时间
        let token = jwt.sign({
          username
        }, PRIVATE_KEY, {
          expiresIn: EXPIRESD
        })
        res.send({
          code: 0,
          msg: '登录成功',
          token: token
        })

      }

    }
  } catch (e) {
    console.log(e)
    next(e)
  }
})

module.exports = router;