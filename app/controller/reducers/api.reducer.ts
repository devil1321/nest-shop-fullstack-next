import { APITypes } from "../types";
import { APIActions } from "../actions/api.actions";
import * as Interfaces from '@/app/controller/interfaces'

interface InitState {
    data:any;
    user:any;
    products:Interfaces.Product[]
    token:any;
    cart:any[];
    payments:any[];
    image:string;
}

const initState:InitState = {
    data:null,
    products:[],
    token:null,
    user:null,
    cart:[],
    payments:[],
    image:''
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
            }
        case APITypes.API_LOGIN:
            return{
                ...state,
                user:action.user,
                token:action.token,
                data:action.data,
            }
        case APITypes.API_TEST:
            return{
                ...state,
                user:action.user,
                token:action.token,
                data:action.data,
            }
        case APITypes.API_LOGIN:
            return{
                ...state,
                user:action.user,
                token:action.token,
                data:action.data,
            }
        case APITypes.API_LOGOUT:
            return{
                ...state,
                token:action.token,
            }
        case APITypes.API_GET_USER:
            return{
                ...state,
                user:action.user,
                image:action.image
            }
        case APITypes.API_GET_CART:
            return{
                ...state,
                cart:action.cart,
                data:(function(){
                    if(action.data){
                        return action.data
                    }
                })()
            }
        case APITypes.API_CLEAR_HISTORY:
            return{
                ...state,
                cart:action.cart,
                data:action.data
            }
        case APITypes.API_GET_PAYMENTS:
            return{
                ...state,
                payments:action.payments,
                data:(function(){
                    if(action.data){
                        return action.data
                    }else{
                        return
                    }
                })()
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