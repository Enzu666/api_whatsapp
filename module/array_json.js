/* *********************************************************************
* Objetivo: manipular uma lista de dados do whatsapp
* Data: 13/04/2026  
* Autor: Enzo
* **********************************************************************/

const usuarios = require('./contatos.js').contatos

const getListaDeUsuarios = () => usuarios

const getProfileUser = (number) =>{
    let numero = String(number)
    let profile = false
    usuarios['whats-users'].forEach(usuario => {
        if(usuario.number == numero)
            profile = {
                "account"  : usuario.account,
                "nickname" : usuario.nickname,
                "created-since": usuario['created-since'],
                "profile-image": usuario['profile-image'],
                "number" : usuario.number,
                "background" : usuario.background
            }
    })

    return profile
    
}

const getContatosUsers = (number) =>{
    let numero = String(number)
    let contatos = {
        "contatos": []
    }
    let status = false
    usuarios['whats-users'].forEach(usuario => {
        if(usuario.number == numero){
            usuario.contacts.forEach(contato => {
                contatos.contatos.push({
                "name": contato.name,
                "description": contato.description,
                "image": contato.image
                })
            })
            status = true   
        }
    })
    if(!status){
        return status
    }
    return contatos 
}

const getMensagens = (number) =>{
    let numero = String(number)
    let mensagens = {
        "messages": []
    }
    let status = false
    usuarios['whats-users'].forEach(usuario => {
        if(usuario.number == numero){
            usuario.contacts.forEach(contato => {
                mensagens.messages.push(contato.messages)
            })
            status = true   
        }
    })
    if(!status){
        return status
    }
    return mensagens
}
const getMensagensContato = (number, name) =>{
    let nome = String(name)
    let numero = String(number)
    let mensagens = {
        "messages":{}
    }
    let status = false
    usuarios['whats-users'].forEach(usuario => {
        if(usuario.number == numero){
            usuario.contacts.forEach(contato => {
                if(String(contato.name).toUpperCase().trim().replace(" ","") == nome.toUpperCase().trim().replace(" ","")){
                    mensagens.messages = contato.messages
                    status = true
                }
                    
            })
               
        }
    })
    if(!status){
        return status
    }
    return mensagens
}

const getBuscaPorPalavra = (number, palavra) =>{
    let palavraChave = String(palavra).toUpperCase()
    let numero = String(number)
    let mensagens = {
        "messages": []
    }
    let status = false
    usuarios['whats-users'].forEach(usuario => {
        if(usuario.number == numero){
            usuario.contacts.forEach(contato => {
                contato.messages.forEach(mensagem => {
                    if(String(mensagem.content).toUpperCase().includes(palavraChave)){
                        mensagens.messages.push(mensagem)
                        status = true 
                    }
                        
                })
            })
              
        }
    })
    if(!status){
        return status
    }
    return mensagens
}

module.exports={
    getListaDeUsuarios,
    getProfileUser,
    getContatosUsers,
    getMensagens,
    getMensagensContato,
    getBuscaPorPalavra
}
// console.log(getBuscaPorPalavra("11987876567", "Leonid"))
// console.log(getMensagensContato("11987876567", "anamaria"))
// console.log(getMensagens("11987876567"))
// console.log(getContatosUsers("119878765679"))
// console.log(getProfileUser("1196657896"))
// console.log(getListaDeUsuarios())