import { NextApiRequest,NextApiResponse } from 'next'
import client from '@/prisma/prisma'

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method === 'POST'){
        let payments = []
        const { cart_id,total,user_id } = req.body
        const cartItems = await client.cart.findMany({
            where:{
                cart_id:cart_id
            }
        })
        // const Payment = await client.payments.create({
        //     user_id,
        //     total,
        //     cart_items_id:cart_id,
        //     is_payed:true
        // })
        // res.json({payment:Payment})
        res.end()
    }
}