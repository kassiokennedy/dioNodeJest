import { request, response, Router } from 'express'

const routes = Router()

const database = []

routes.get('/users', (request, response) => {
  return response.status(200).json(database)
})

/**
Métodos http:
post - criar dados
put/patch - editar dados
delete - deletar dados
 */

export { routes }
