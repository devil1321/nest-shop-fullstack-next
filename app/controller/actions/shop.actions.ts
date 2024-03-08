import { ShopTypes } from "../types";
import * as Interfaces from '@/app/controller/interfaces'

interface CHANGE_CURRENCY{
    type:ShopTypes.SHOP_CHANGE_CURRENCY,
    currency:number;
}
interface SET_PRODUCTS{
    type:ShopTypes.SHOP_SET_PRODUCTS,
    products:Interfaces.Product[]
}

export type ShopActions = CHANGE_CURRENCY | SET_PRODUCTS

