import { NextApiRequest,NextApiResponse } from 'next'
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()


export default function handler(req:NextApiRequest,res:NextApiResponse){
    // console.log(prisma)
    res.json({msg:'msg'})
}