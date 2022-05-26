const express = require('express')
const router = express.Router()

//Todos os Autores
router.get('/', (req,res)=>{
    res.render('index')
    
})

//Novo autor

router.get('/new', (req,res)=>{
    res.render('authors/new')    
})

//Criar Autor
router.post('/new', (req,res)=>{
    res.send('Create')
    
})



module.exports = router