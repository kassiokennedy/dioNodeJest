import { request, response, Router } from 'express'
import { usersController } from './controllers/usersController.js'
/**
Métodos http:
get - ler os dados
post - criar dados
put/patch - editar dados
delete - deletar dados
 */
const routes = Router()

routes.get('/users', usersController.listarUsuario)

routes.post('/users',usersController.criarUsuario)

export { routes }
