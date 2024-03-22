import { APITypes } from "../types"
import * as Interfaces from '@/app/controller/interfaces'

interface GET_USER{
    type:APITypes.API_GET_USER,
    user:any,
    route:string;
}

interface SET_PRODUCTS{
    type:APITypes.API_SET_PRODUCTS,
    products:Interfaces.Product[]
}

interface CHANGE_CURRENCY{
    type:APITypes.API_CHANGE_CURRENCY,
    currency:number;
    products:Interfaces.Product[]
}

interface LOGIN{
    type:APITypes.API_LOGIN,
    user:any;
    token:any;
    data:any;
    route:string;
}

interface LOGOUT{
    type:APITypes.API_LOGOUT
    token:any;
    route:string;
}

interface REGISTER {
    type:APITypes.API_REGISTER,
    user:any;
    token:string;
    data:any;
    route:string;
}
interface UPDATE_CART {
    type:APITypes.API_UPDATE_CART,
    data:any;
}
interface UPDATE_PROFILE {
    type:APITypes.API_UPDATE_PROFILE,
    data:any;
}
interface PAY {
    type:APITypes.API_PAY,
    data:any;
}

export type APIActions = GET_USER | SET_PRODUCTS | CHANGE_CURRENCY | REGISTER | LOGIN | LOGOUT | UPDATE_CART | UPDATE_PROFILE | PAY