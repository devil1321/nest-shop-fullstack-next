import { ShopTypes } from "../types"
import { ShopActions } from "../actions/shop.actions"
import store from "../store";

interface InitState {
    currency:number;
    orderTrackingCount:number;
    cartCount:number;
    cart:any[];
    products:any[];
}

const initState:InitState = {
    currency:1,
    orderTrackingCount:0,
    cartCount:0,
    cart:[],
    products:[]
}

export default (state:InitState = initState,action:ShopActions) =>{
    switch(action.type){
        case ShopTypes.SHOP_CHANGE_CURRENCY:
            return{
                ...state,
                currency:action.currency
            }
        case ShopTypes.SHOP_SET_PRODUCTS:
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