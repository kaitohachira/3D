const express = require('express')
const app = express()
const port = 3333

app.get('/',(req, res)=>{
    res.send('Olá, mundo')
})

app.listen('port', (req, res)=>{
    console.log(`servidor on na porta ${port}`)
})