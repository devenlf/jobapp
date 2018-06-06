const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/jobData';
mongoose.connect(DB_URL);
const con = mongoose.connection;
con.on('error', console.error.bind(console, '连接数据库失败'));
con.once('open',()=>{
    console.log('连接成功')
})

const models = {
    user: {
        'user': { 'type': String, 'require': true },
        'pwd': { 'type': String, 'require': true },
        'type': { 'type': String, 'require': true },
        //头像
        'avatar': { 'type': String },
        'title': { 'type': String },
        'company': { 'type': String },
        'money': { 'type': String }
    },
        chat: {

        }
    
}

for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}



module.exports = {
    getModel: function (names) {
       return mongoose.model(names)
    }
}