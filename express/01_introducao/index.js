const express = require('express')
const app = express()
const port = 3333

app.get('/', (req, res)=>{
    res.send('Olá, mundo!')
})

// get - /clientes  - console.log("pagina Cliente")
app.get('/cliente',(req, res)=>{
    res.send("pagina Cliente")
})

app.listen(port, ()=>{
    console.log(`Servidor on na porta ${port}😁`)
})