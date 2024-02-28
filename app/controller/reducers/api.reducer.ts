import { APITypes } from "../types";
import { APIActions } from "../actions/api.actions";

interface InitState {

}

const initState:InitState = {

}

export default (state:InitState = initState,action:APIActions) =>{
    switch(action.type){
        default:
            return {
                ...state
            }
        }
    }