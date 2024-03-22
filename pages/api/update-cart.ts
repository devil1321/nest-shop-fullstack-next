import { NextApiRequest,NextApiResponse } from 'next'
import client from '@/prisma/prisma'
import { v4 as uuidv4 } from 'uuid';
import * as Interfaces from '@/app/controller/interfaces'

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    // console.log(prisma)
    if(req.method === 'POST'){
        const { cart,user_id } = req.body 
        cart.forEach(async(el:any)=>{
            const { id,quantity, price  } = el
            let uuid = uuidv4()
            let isExists = true
            while(isExists){
                const query = await client.cart.findFirst({
                    where:{
                        cart_id:uuid
                    }
                })
                if(!query){
                    isExists = false
                }else{
                    uuid = uuidv4()
                }
            }
            try{
                const cartItem = await client.cart.create({
                    data:{
                        cart_id:uuid,
                        user_id,
                        quantity,
                        price,
                        product_id:id
                    }
                })
            }catch(err){
                console.log(err)
                res.json({msg:err})
            }
        })
        res.json({msg:'Cart Updated'})
    }
}