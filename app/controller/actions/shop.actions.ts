import { ShopTypes } from "../types";
import * as Interfaces from '@/app/controller/interfaces'

interface ADD_TO_CART {
    type:ShopTypes.SHOP_ADD_TO_CART,
    cart:Interfaces.CartItem[]    
}
interface INCREMENT {
    type:ShopTypes.SHOP_INCREMENT,  
    cart:Interfaces.CartItem[]  
}
interface DECREMENT {
    type:ShopTypes.SHOP_DECREMENT,  
    cart:Interfaces.CartItem[]  
}
interface REMOVE_FROM_CART {
    type:ShopTypes.SHOP_REMOVE_FROM_CART, 
    cart:Interfaces.CartItem[]   
}
interface CLEAR_CART {
    type:ShopTypes.SHOP_CLEAR_CART,    
    cart:Interfaces.CartItem[]
}
interface SUMMARY {
    type:ShopTypes.SHOP_SUMMARY,
    summary:number
}

export type ShopActions = ADD_TO_CART | INCREMENT | DECREMENT | REMOVE_FROM_CART | CLEAR_CART | SUMMARY

