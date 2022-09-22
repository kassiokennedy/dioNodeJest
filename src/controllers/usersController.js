import { database } from "./database.js"

const usersController = {
  criarUsuario (request, response) {
  
    const { name } = request.body
  
    if(name.length<1){
      return response.status(403).json({mensagem: "nome invalido"})
    }
  
    database.push(name)
  
    return response.status(201).json({'mensagem':"deu certo"})
  },

  listarUsuario (request, response){
    return response.status(200).json(database)

  }
}

export { usersController }