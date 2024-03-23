import { NextApiRequest,NextApiResponse } from 'next'
import client from '@/prisma/prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method === 'POST'){
        const User = await client.userShop.findFirst({where:{
            email:'test@gmail.com'
        }})
        if(User){
            bcrypt.compare('test', User.password as string, function(err, result) {
                if(result){
                    const token = jwt.sign(User,process.env.JWT_SECRET as string)
                    res.json({user:User,token:token})
                }else{
                    res.json({msg:'Password not match'})
                }
            });
        }else{
            res.json({msg:'User Not Exists'})
        }
    }
}