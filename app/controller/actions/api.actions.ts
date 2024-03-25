import { APITypes } from "../types"
import * as Interfaces from '@/app/controller/interfaces'

interface TEST{
    type:APITypes.API_TEST,
    user:any;
    token:any;
    data:any;
}

interface GET_USER{
    type:APITypes.API_GET_USER,
    user:any,
    image:string;
}

interface GET_CART{
    type:APITypes.API_GET_CART,
    cart:any[]
    data:any;
}

interface GET_PAYMENTS{
    type:APITypes.API_GET_PAYMENTS,
    payments:any[]
    data?:any;
}

interface SET_PRODUCTS{
    type:APITypes.API_SET_PRODUCTS,
    products:Interfaces.Product[]
}

interface FILTER_PRODUCTS{
    type:APITypes.API_FILTER_PRODUCTS,
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
}

interface LOGOUT{
    type:APITypes.API_LOGOUT
    token:any;
}

interface REGISTER {
    type:APITypes.API_REGISTER,
    user:any;
    token:string;
    data:any;
}
interface UPDATE_CART {
    type:APITypes.API_UPDATE_CART,
    data:any;
}
interface CLEAR_HISTORY {
    type:APITypes.API_CLEAR_HISTORY,
    data:any;
    cart:any[];
}
interface UPDATE_PROFILE {
    type:APITypes.API_UPDATE_PROFILE,
    data:any;
}
interface PAY {
    type:APITypes.API_PAY,
    data:any;
}

export type APIActions = GET_USER | GET_CART | CLEAR_HISTORY | GET_PAYMENTS | TEST | SET_PRODUCTS | FILTER_PRODUCTS | CHANGE_CURRENCY | REGISTER | LOGIN | LOGOUT | UPDATE_CART | UPDATE_PROFILE | PAY