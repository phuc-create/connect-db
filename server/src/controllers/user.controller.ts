import { Request,Response } from "express"
import {getRepository} from 'typeorm'
import { Users } from "../entities/Users"
export const userController = async (req:Request,res:Response):Promise<Response>=>{
const users = await getRepository(Users).find()
  return res.json(users)
}
