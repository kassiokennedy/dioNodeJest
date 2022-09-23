import { Request, Response } from "express"
import { database } from "../database"

export class UsersController {

  criarUsuario(request: Request, response: Response): Response {
    const { name } = request.body

    if (name.length < 1) {
      return response.status(403).json({ mensagem: "nome invalido" })
    }
    database.push()
    return response.status(201).json({ 'mensagem': "deu certo" })
  }

  listarUsuario(request: Request, response: Response): Response {
    return response.status(200).json(database)

  }
}