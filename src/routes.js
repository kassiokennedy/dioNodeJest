import { request, response, Router } from 'express'

const routes = Router()

const database = ['Kássio']

routes.get('/users', (request, response) => {
  return response.status(200).json(database)
})
routes.post('/users', (request, response) => {
  const body = request.body
  return response.json(body)
})
/**
Métodos http:
post - criar dados
put/patch - editar dados
delete - deletar dados
 */

export { routes }
