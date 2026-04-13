/************************************************************************************
 * 
*************************************************************************************/
//import das dependências para criar a API

const express   = require('express')
const cors = require('cors')
const port = 8080
//criando um objeto para manipular o express 
const app = express()

//conjunto de permissões a serem aplicadas no cors da api
const corsOptions = {
    origin : ['*'], //A origem da requisição, podendo ser um ip ou o * (todos)
    methods: 'GET', //verbos que serão liberados na API (GET, POST, PUT e DELETE)
    allowedHeaders: ['Content type', 'Autorization'], //allowedHeaders são permissões de cabeçalho de CORS
}

//configura as permissões da api através do cors
app.use(cors(corsOptions))

const {
    getListaDeUsuarios,
    getProfileUser,
    getContatosUsers,
    getMensagens,
    getMensagensContato,
    getBuscaPorPalavra
}= require('./module/array_json')

app.get('/v1/whatsapp/usuarios', function(request, response){

    response.status(200).json(getListaDeUsuarios())

})

app.get('/v1/whatsapp/profile/user', function(require, response){
    let numero = require.query.number
    let user = getProfileUser(numero)
    if(user){
        response.status(200).json(user)
    }else{
        response.status(404)
    }
})
app.get('/v1/whatsapp/contatos', function(require, response){
    let numero = require.query.number
    let contato = getContatosUsers(numero)
    if(contato){
        response.status(200).json(contato)
    }else{
        response.status(404)
    }
})
app.get('/v1/whatsapp/mensagens', function(require, response){
    let numero = require.query.number
    let mensagem = getMensagens(numero)
    if(mensagem){
        response.status(200).json(mensagem)
    }else{
        response.status(404)
    }
})
app.get('/v1/whatsapp/mensagens/contatos', function(require, response){
    let nome = require.query.name
    let numero = require.query.number
    let mensagem = getMensagensContato(numero, nome)
    if(mensagem){
        response.status(200).json(mensagem)
    }else{
        response.status(404)
    }
})
app.get('/v1/whatsapp/buscar/palavra', function(require, response){
    let palavraChave = require.query.palavra
    let numero = require.query.number
    let mensagem = getBuscaPorPalavra(numero, palavraChave)
    if(mensagem){
        response.status(200).json(mensagem)
    }else{
        response.status(404)
    }
})
app.listen(port, ()=> console.log("API_whatsapp rodando"))