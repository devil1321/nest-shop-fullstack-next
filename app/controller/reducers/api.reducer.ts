import { APITypes } from "../types";
import { APIActions } from "../actions/api.actions";
import * as Interfaces from '@/app/controller/interfaces'

interface InitState {
    products:Interfaces.Product[]
}

const initState:InitState = {
    products:[]
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
        default:
            return {
                ...state
            }
        }
    }