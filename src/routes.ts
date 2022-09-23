import { Router } from 'express'
import { UsersController } from './controllers/usersController'


const routes = Router()
const usersController = new UsersController()

routes.get('/users', usersController.listarUsuario)

routes.post('/users', usersController.criarUsuario)

export { routes }

/**
Métodos http:
get - ler os dados
post - criar dados
put/patch - editar dados
delete - deletar dados
 */