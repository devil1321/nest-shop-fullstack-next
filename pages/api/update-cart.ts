import { NextApiRequest,NextApiResponse } from 'next'
import client from '@/prisma/prisma'



export default function handler(req:NextApiRequest,res:NextApiResponse){
    // console.log(prisma)
    
    res.json({msg:'msg'})
}