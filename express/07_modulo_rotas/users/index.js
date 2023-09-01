const express = require('express')
const router = express.router()
const PORT = 3333


const path = require('path')
const basePath = path.join(__dirname,'../templates')

//IMPORTAR AS MINHAS ROTAS
const users = require('../users')


//rotas de usuários
app.users('/users', users)


//Buscar a página de formulario de usuario
router.get('/users/add',(req, res)=>{
    res.sendFile(`${basePath}/userForm.html`)
})


//Cadastra usuario
router.post('/users/save',(req, res)=>{
    const{name, age} = req.body
    console.log(`Seu nome ${name} e a idade ${age}`)
    //const q = `SELECT INTO tb_users (name, age) VALUE (${name},${age})`
    res.sendFile(`${basePath}/userForm.html`)
})

module.exports = router