import { NextApiRequest,NextApiResponse } from 'next'
import client from '@/prisma/prisma'

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method === 'POST'){
        const { user_id } = req.body
        if(user_id){
            try{
                const Cart = await client.cart.findMany({
                    where:{
                        user_id:user_id
                    }
                })
                if(Cart){
                    const disconnected = await client.$disconnect()
                    console.log(disconnected)
                    res.json({cart:Cart})
                }            
            }catch(err){
                console.log(err)
                res.json({ cart:[],err })
            }
        }else{
            res.json({cart:[],msg:'Cart Id not provided'})
        }
    }
}