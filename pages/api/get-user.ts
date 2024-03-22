import { NextApiRequest,NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'


export default function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method === 'POST'){
        const token = req.headers.authorization?.slice(7,req.headers.authorization.length)
        const user = jwt.verify(token as string,process.env.JWT_SECRET as string)
        res.json({ user })
    }
}