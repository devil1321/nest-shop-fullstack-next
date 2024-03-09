import { Dispatch } from "redux"
import { APITypes } from "../types"
import axios from "axios"

export const setProducts = () => async(dispatch:Dispatch) =>{
    try{
        const res = await axios.get('/assets/products.json')
        const data = await res.data
        dispatch({
            type:APITypes.API_SET_PRODUCTS,
            products:data
        })
    }catch(err){
        console.log(err)
    }
}