/* eslint-disable no-console */
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import http from 'http'
import * as projectRoutes from './routes/project.routes'

const app = express()
const server = http.createServer(app)

app.use(morgan('dev'))
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    }),
)
app.use(
    bodyParser.json({
        limit: '2mb'
    })
)
app.use(
    bodyParser.raw({
        type: 'image/*',
        limit: '5mb'
    })
)

projectRoutes.registerRoutes(app)

server.listen(process.env.PORT || 3000)
console.warn('processId:' + process.pid.toString() + ' App Running...')