import fastify from 'fastify'
import { memoriesRoute } from './routes/memories'

const app = fastify()

app.register(memoriesRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on port 3333')
  })
