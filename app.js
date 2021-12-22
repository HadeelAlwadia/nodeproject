// imports
import express from 'express'

const express=require('express')
const app=express()
const port=5000
const fs = require("fs");


app.get("/:id", (req, res) => {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        const user=data['user'+req.params.id]
         user? res.end(user):res.end('Oops! not found')

       })

})

app.get("/users", (req, res) => {

    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        res.end(data)
   
       })
})

app.delete("/:id",(req, res) => {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    const newData=JSON.parse(data).filter(item=>item.id!==req.params.id)
    res.end(JSON.stringify(newData))
    })
})





// listen on port 2000
app.listen(port,()=>{
    console.info(`'listen',${port}`)
})











