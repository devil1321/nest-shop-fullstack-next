import { Dispatch } from "redux"
import { APITypes } from "../types"
import axios from "axios"
import * as Interfaces from '../interfaces'

export const changeCurrency = (currency:string) => async(dispatch:Dispatch) =>{
    try{
        const res = await axios.get('/assets/products.json')
        const products = await res.data
        let actualCurrency = 0
        switch(currency){
            case 'USD':
                actualCurrency = 1
                break
            case 'EU':
                actualCurrency = 0.92
                break
            case 'PLN':
                actualCurrency = 0.25 
                break
            default:
                actualCurrency = 1
        }
    
        const tmpProducts = products.map((p:Interfaces.Product) =>({
            ...p,
            prevPrice:(p.prevPrice / actualCurrency).toFixed(2),
            price:(p.price / actualCurrency).toFixed(2)
        }))
        dispatch({
            type:APITypes.API_CHANGE_CURRENCY,
            currency:actualCurrency,
            products:tmpProducts
        })
    }catch(err){
        console.log(err)
    }
}


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