import { NextApiRequest,NextApiResponse } from 'next'
import client from '@/prisma/prisma'

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method === 'POST'){
        try{
            const { user_id } = req.body
            const Cart = await client.cart.deleteMany({
                where:{
                    user_id:user_id
                }
            })
            const disconnected = await client.$disconnect()
            console.log(disconnected)
            res.json({cart:[],data:Cart})
        }catch(err){
            console.log(err)
            res.json({err})
        }
    }
}