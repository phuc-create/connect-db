require('dotenv').config()
import 'reflect-metadata'
import express from 'express'
import { createConnection } from 'typeorm'
import cors from 'cors'
import userRouter from './routers/user.router'
import { Users } from './entities/Users'
import path from 'path'
const app = express()
app.use(cors())
app.use(express.json())

const connection = async () => {
  await createConnection({
    type: 'mysql',
    host:'localhost',
    port:3306,
    username: 'root',
    password: '',
    database: 'quickshop',
    logging: true,
    synchronize: true,
    entities: [path.join(__dirname + "/entities/**/*.js")],
    
  })

  app.use(userRouter)
  app.listen(4000, () => {
    console.log('Yoo,server running 🚀🚀🚀')
  })
}

connection().catch(err => console.log(err))
