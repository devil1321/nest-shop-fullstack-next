import { APITypes } from "../types";
import { APIActions } from "../actions/api.actions";
import * as Interfaces from '@/app/controller/interfaces'

interface InitState {
    data:any;
    user:any;
    products:Interfaces.Product[]
    token:any;
    route:string;
}

const initState:InitState = {
    data:null,
    products:[],
    token:null,
    user:null,
    route:'/credentials'
}

export default (state:InitState = initState,action:APIActions) =>{
    switch(action.type){
        case APITypes.API_CHANGE_CURRENCY:
            return{
                ...state,
                products:action.products,
                currency:action.currency
            }
        case APITypes.API_SET_PRODUCTS:
            return{
                ...state,
                products:action.products
            }
        case APITypes.API_REGISTER:
            return{
                ...state,
                user:action.user,
                token:action.token,
                data:action.data,
                route:action.route
            }
        case APITypes.API_LOGIN:
            return{
                ...state,
                user:action.user,
                token:action.token,
                data:action.data,
                route:action.route
            }
        case APITypes.API_LOGOUT:
            return{
                ...state,
                token:action.token,
                route:action.route
            }
        case APITypes.API_GET_USER:
            return{
                ...state,
                user:action.user,
                route:action.route
            }
        case APITypes.API_UPDATE_CART:
            return{
                ...state,
                data:action.data
            }
        case APITypes.API_UPDATE_PROFILE:
            return{
                ...state,
                data:action.data
            }
        case APITypes.API_UPDATE_CART:
            return{
                ...state,
                data:action.data
            }
        case APITypes.API_PAY:
            return{
                ...state,
                data:action.data
            }
        default:
            return {
                ...state
            }
        }
    }