const express = require('express')
const app = express();
const PORT = 3333

const path = require('path')
const basepath = path.join(__dirname, 'templates')


app.get('/produto/:id',(req, res)=>{
    const id = req.params.id
    // Farzer a leitura na tabela produto e resgatar o produto dessa tabela
    console.log(`Estamos buscando o produto: ${id}😎`);
    res.sendFile(`${basepath}/produto.html`)
})


app.get('/',(req, res)=>{
   res.sendFile(`${basepath}/index.html`)
})


app.listen(PORT, ()=>{
  console.log(`sevidor on na porta ${PORT}👌`); 
})

