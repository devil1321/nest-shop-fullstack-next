import { APITypes } from "../types";
import { APIActions } from "../actions/api.actions";
import * as Interfaces from '@/app/controller/interfaces'

interface InitState {
    data:any;
    products:Interfaces.Product[]
    token:string;
    route:string;
}

const initState:InitState = {
    data:null,
    products:[],
    token:'',
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
                data:action.data
            }
        case APITypes.API_LOGIN:
            return{
                ...state,
                data:action.data
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
                data:action.data,
                route:action.route
            }
        default:
            return {
                ...state
            }
        }
    }