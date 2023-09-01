const express = require('express')
const exphbs = require('express-handlebars')

const port = 3333

//Utilizando o express
const app = express()
//Utilizando o handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/',(req, res)=>{
      return res.render('home')
})

app.listen(3333, ()=>{
    console.log(`Servidor ON`);
})