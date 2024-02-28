import { ShopTypes } from "../types"
import { ShopActions } from "../actions/shop.actions"

interface InitState {
    currency:number;
}

const initState:InitState = {
    currency:1
}

export default (state:InitState = initState,action:ShopActions) =>{
    switch(action.type){
        case ShopTypes.SHOP_CHANGE_CURRENCY:
            return{
                ...state,
                currency:action.currency
            }
        default:
            return {
                ...state
            }
        }
    }