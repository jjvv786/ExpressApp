const express = require('express')
// require('dotenv').config()

const app =express()

const port = process.env.PORT

app.use(express.json())

app.get('/',(req,res)=>{
  res.json({status:"working"})
})

app.listen(port)