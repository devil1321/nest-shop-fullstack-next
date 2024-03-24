import { NextApiRequest,NextApiResponse } from 'next'
import client from '@/prisma/prisma'
import * as Interfaces from '@/app/controller/interfaces'


export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method === 'POST'){
        const user = req.body as Interfaces.User
        try{
            const User = await client.userShop.update({
                where:{
                    id:user.id
                },
                data:user
            })
            if(User){
                const disconnected = await client.$disconnect()
                res.json({ user:User,msg:"Profile updated" })
            }
        }catch(err){
            console.log(err)
            res.json({ msg:err })
        }
    }
    
    
    res.json({msg:'msg'})
}