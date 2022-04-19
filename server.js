const express = require('express')
const path = require('path')
const cors =  require('cors')

const app =  express()
app.use(express.static(path.join(__dirname, 'frontend/build')))
app.use(cors())

app.get('/', (req, res) => {
    res.json(
       {
        msg:"hello"
       }
    )
})

app.get('/login', (req, res) => {
    res.json(
       {
        msg:"Welcome to login page!"
       }
    )
})


app.listen(5000 , () => {
    console.log("server is running on port 5000")
})