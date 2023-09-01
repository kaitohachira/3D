const express = require('express')
const app = express()
const port = 3333

const path = require('path') 
const basepath = path.join(__dirname, 'templates')

app.get('/contatos', (req, res)=>{
    //res.send('Olá, mundo!')
    res.sendFile(`${basepath}/contatos.html`)
})

app.listen(port, ()=>{
    console.log(`Servidor on na porta ${port}`)
    console.log(basepath)
})
