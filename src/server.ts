import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoute } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(jwt, {
  secret: 'spacetime',
})

app.register(cors, {
  origin: true,
})

app.register(authRoutes)
app.register(memoriesRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on port 3333')
  })
