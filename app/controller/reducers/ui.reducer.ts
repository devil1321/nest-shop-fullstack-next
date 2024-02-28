import { UITypes } from "../types"
import { UIActions } from "../actions/ui.actions"

interface InitState {
    language:string;
    currency:string;
}

const initState:InitState = {
    language:'English',
    currency:'USD'
}

export default (state:InitState = initState,action:UIActions) =>{
    switch(action.type){
        case UITypes.UI_CHANGE_LANGUAGE:
            return {
                ...state,
                language:action.language
            }
        case UITypes.UI_CHANGE_CURRENCY_STRING:
            return {
                ...state,
                currency:action.currency
            }
        default:
            return {
                ...state
            }
        }
    }