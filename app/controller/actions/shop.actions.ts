import { ShopTypes } from "../types";
import * as Interfaces from '@/app/controller/interfaces'

interface CHANGE_CURRENCY{
    type:ShopTypes.SHOP_CHANGE_CURRENCY,
    currency:number;
}

export type ShopActions = CHANGE_CURRENCY 

