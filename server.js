
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const connectDB = require('./db')
const ticket = require('./model')

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get('/add',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get('dispAll',(req,res)=>{
    res.sendFile(__dirname+'/display.html')
})


app.post('/addDetails',async(req,res)=>{
    data = new ticket(req.body)
    data.save()
    console.log(data)
    res.send(data)
})

app.get('/display',async(req,res)=>{
    const data = await ticket.find();
    res.json(data)

})

app.listen(9000,()=>{
    connectDB();
    console.log("first")
})