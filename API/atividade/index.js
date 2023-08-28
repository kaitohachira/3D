const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const port = 3000

app.engine('handlebars', exphbs.engine)
app.set('views engine', 'handlebars')


app.get('/',(req, res)=>{
       const user = {
        name:'Veida',
        surname:'Kimberly',
        age:18
       }
       const palavra = "teste"
       const auth = true
       const approved = false
       return res.render('home', {user:user, palavra, auth, approved})
})




app.get('/posts',(req, res)=>{
    const posts = [
      {
        title:"Cachorro",
        category:"animais",
        body:"Postagem sobre animais",
        Comments:1256
      },
      {
        title:"Macarrão",
        category:"Comida",
        body:"Postagem sobre comida",
        Comments:7528
      },
      {
        title:"Argentina",
        category:"Lugar",
        body:"Postagem sobre lugares",
        Comments:6523
      }
    ]

    return res.render('posts', {posts})
})


  app.listen(3000,()=>{
    console.log(`Servidor ON ${port}☆*: .｡. o(≧▽≦)o .｡.:*☆`)
  })