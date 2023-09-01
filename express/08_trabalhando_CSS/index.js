const express = require('express')
const app = express()
const PORT = 5000

const path = require('path')
const basePath = path.join(__dirname,'tamplates')

//Arquivos Estaticos - > CSS, IMG, VIDEO, JS
app.use(express.static('public'))

app.get('/', (req, res)=>{
   res.sendFile(`${basePath}/index.html`)
})


app.listen(PORT,()=>{
  console.log(`Servidor ON ${PORT}`)
})

