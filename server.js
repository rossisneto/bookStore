//Aplicando variaveis para desenvolvimento
if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()    
}

//Importando modulos
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

//Importando o router
const indexRouter = require('./routes/index')


//Conectando ao MongoDB
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})
const db= mongoose.connection
db.on('err',err => console.error(err))
db.once('open',() => console.log('Conectado ao MongoDB'))

//Configuração do app
app.set('view engine', 'ejs')
app.set('views',__dirname +'/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use('/', indexRouter)


//Inicializando o servidor
app.listen(process.env.PORT || 3000)