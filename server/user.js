const express = require('express');
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');
const utils = require('utility');


Router.get('/list',function(req,res){
    // User.remove({},function(e,d){})
    User.find({},function(err,doc){
        res.json(doc);
    })
})

Router.post('/login',function(req,res){
    const {user,pwd} = req.body;
    User.findOne({user,pwd:utils.md5(pwd)},function(err,doc){
        if(!doc){
            return res.json({code:1,msg:'用户名密码错误'})
        }
        return res.json({code:0,data:doc})
    })
})

Router.post('/register',function(req,res){
    console.log(req.body);
    console.log(User)
    const { user,pwd,type } = req.body;
    User.findOne({user},function(err,doc){
        if(doc){
            return res.json({code:1,msg:'用户名重复'})
        }
        User.create({user,type,pwd:utils.md5(pwd)},function(e,d){
            if(e){
                return res.json({})
            }else{
               return res.json({code:0})
            }
        })
    })
})

Router.get('/info',function(req,res){
    return res.json({code:1})
})  

module.exports = Router