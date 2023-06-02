const mongoose = require('mongoose')

module.exports = connectDB = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/ticket')
    .then(()=>{
        console.log("DB connected")
    })
    .catch((e)=>{
        console.log("DB not connected")
    })
}