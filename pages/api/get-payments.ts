import { NextApiRequest,NextApiResponse } from 'next'
import client from '@/prisma/prisma'

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method === 'POST'){
        const { user_id } = req.body
        const Payments = await client.cart.findMany({
            where:{
                user_id:user_id
            }
        })
        res.json({payments:Payments})
    }
}