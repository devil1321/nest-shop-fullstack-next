import { Dispatch } from "redux"
import { ShopTypes } from "../types"

export const changeCurrency = (currency:string) => (dispatch:Dispatch) =>{

    let actualCurrency = 0
    
    switch(currency){
        case 'USD':
            actualCurrency = 1
            break
        case 'EU':
            actualCurrency = 2
            break
        case 'PLN':
            actualCurrency = 3
            break
        default:
            actualCurrency = 1
    }

    dispatch({
        type:ShopTypes.SHOP_CHANGE_CURRENCY,
        currency:actualCurrency
    })
}

