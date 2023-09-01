const express = require('express')
const exphbs = require('express-handlebars')

const port = 3333

//Utilizando o express
const app = express()
//Utilizando o handlebars
app.engine('handlebars', exphbs.engine())
app.set('views engine', 'handlebars')

app.get('/',(req, res)=>{
      const user = {
        name:'yasmim',
        surname:'guedes',
        age:17
      }
      const palavra = "teste"
      return res.render('home', {user:user, palavra})
})

app.listen(3333, ()=>{
    console.log(`Servidor ON`);
})