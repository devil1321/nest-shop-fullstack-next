import { NextApiRequest, NextApiResponse } from 'next'
import client from '@/prisma/prisma'
import { v4 as uuidv4 } from 'uuid';
import * as Interfaces from '@/app/controller/interfaces'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { cart, user_id } = req.body;
        const uuid = uuidv4();
        const cartItems = cart.map((el: any) => {
            const { id, quantity, price } = el;
            return {
                cart_id: uuid,
                user_id,
                quantity,
                price,
                product_id: id,
            };
        });
        try {
            const createdCartItems = await client.cart.createMany({
                data: cartItems,
                skipDuplicates: true 
            });
            res.json({ msg: 'Cart Updated', cart:createdCartItems });
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
