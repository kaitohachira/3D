const express = require('express')
const exphbs = require('express-handlebars')

const port = 3333

//Utilizando o express
const app = express()
//Utilizando o handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard',(req, res)=>{
   return res.render('dashboard')
})

app.get('/',(req, res)=>{
      const user = {
        name:'yasmim',
        surname:'guedes',
        age:17
      }
      const palavra = "teste"
      const auth = true
      return res.render('home', {user:user, palavra, auth})
})

app.listen(3333, ()=>{
    console.log(`Servidor ON`);
})