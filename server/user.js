const express = require('express');
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');

Router.get('/list',function(req,res){
    User.find({},function(err,doc){
        res.json(doc);
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
        User.create({user,pwd,type},function(e,d){
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