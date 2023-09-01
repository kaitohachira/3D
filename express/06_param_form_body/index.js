const express = requiere('express')
const app = express()
const PORT = 3333

const path = require('path')
const basepath = path.join(__dirname,'template')

//montar um objeto json
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json(
    res.sendFile(`${basepath}/userForm.html`)
))


 
//Rota para mostrar o formulario 
app.get('/user/add',(req, res)=>{
  res.sendFile(`${basepath}/userForm.html`)
})

//Rota para cadastra as info do formulario 
app.post('/user/save',(req, res)=>{
    const{name, age} =  req.body
    //  const nome = req.body
    //  const age = req.body
    console.log(`nome ${nome} e idade: ${ege}`);
})


app.listen(PORT, ()=>{
    console.log(`Servidor on na porta ${PORT}😎`);
})