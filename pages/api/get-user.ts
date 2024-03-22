import { NextApiRequest,NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import client from '../../prisma/prisma'
import { useStyleRegistry } from 'styled-jsx'


export default function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method === 'POST'){
       let user = null
       let token = req.headers.authorization as string
       if(/Bearer/gi.test(token)){
           token = token?.slice(7,token.length)
       }
       if(token !== 'null'){
           user = jwt.verify(token as string,process.env.JWT_SECRET as string)
       }
       if(user){
           res.json({ user:user })
       }else{
           res.json({user:null})
       }
    }
}