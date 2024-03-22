import { APITypes } from "../types"
import * as Interfaces from '@/app/controller/interfaces'

interface GET_USER{
    type:APITypes.API_GET_USER,
    data:any,
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
    data:any
}

interface LOGOUT{
    type:APITypes.API_LOGOUT
    token:any;
    route:string;
}

interface REGISTER {
    type:APITypes.API_REGISTER,
    data:any;
}

export type APIActions = GET_USER | SET_PRODUCTS | CHANGE_CURRENCY | REGISTER | LOGIN | LOGOUT