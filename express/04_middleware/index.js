const express = require('express')
const app = express()
const port = 3333

const path = require('path')
const basepath = path.join(__dirname, 'templates')

const checkAuth = function (req, res, next) {
    const auth = req.authStatus = true 

    if(auth){
    console.log('este usuario esta logado, pode continuar')
    next()
     }else{
        console.log('nao estar logado, faca seu login')
    }
}

//utilizar esse middleware
app.use(checkAuth)

app.get('/',(req, res)=>{
  res.sendFile(`${basepath}/index.html`)
})