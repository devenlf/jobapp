const express = require('express');
const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
    console.log('mongo connected success')
}) 

//创建表
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
//新增数据
// User.create({
//     name:'imooc',
//     age:18
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
//新建app
const app = express();

app.get('/',function(req,res){
    res.send('<h1>hello 12132131</h1>')
})
app.get('/data',function(req,res){
    User.find({},function(err,doc){
       res.json(doc)
    })
    // res.send({name:'imooc'})
})
app.listen(9093,function(){
    console.log('Node app start at port 9093')
})