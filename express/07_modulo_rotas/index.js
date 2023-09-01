const {request} = require('express')
const express = require('express')
const app = express()
const PORT = 3333


const path = require('path')
const basePath = path.join(__dirname,'templates')


//MIDDLEWARE PARA JSON
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

//rotas de usuários
app.users('/users', users)







// app.get('/',(request, response)=>{
//      response.sendFile(`${basePath}`)
// })

// app.listen(PORT, ()=>{
//         console.log(`Servidor on ${PORT}😊`)
// })