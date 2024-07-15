const { Router } = require('express')

const professoresRoutes = require('./professores.routes')
const cursosRoutes = require('./cursos.routes')

const routes = new Router()

routes.use('/professores', professoresRoutes)

routes.use('/cursos', cursosRoutes)

module.exports = routes