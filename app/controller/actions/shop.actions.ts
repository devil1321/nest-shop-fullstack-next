import { ShopTypes } from "../types";

interface CHANGE_CURRENCY{
    type:ShopTypes.SHOP_CHANGE_CURRENCY,
    currency:number;
}

export type ShopActions = CHANGE_CURRENCY

