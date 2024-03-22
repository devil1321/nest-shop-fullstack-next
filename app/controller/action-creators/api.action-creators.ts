import { Dispatch } from "redux"
import { APITypes } from "../types"
import axios from "axios"
import * as Interfaces from '../interfaces'
import { getToken } from '@/app/controller/lib/get-token'
import store from "../store"

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
export const getUser = () => async (dispatch:Dispatch)=>{
    const token = getToken()
    const { user } = store.getState().api
    try{
        const res = await axios.post('/api/get-user',user,{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        const data = await res.data
        dispatch({
            type:APITypes.API_GET_USER,
            user:data?.user?.data ? data.user.data : data.user,
            route:!token ? "/credentials" : "/"
        })
    }catch(err){
        dispatch({
            type:APITypes.API_GET_USER,
            data:{msg:'You must be logged in',user:null},
            route:'/credentials'
        })
    }
}
export const register = (formData:any) => async(dispatch:Dispatch) =>{
    try{
        const res = await axios.post('/api/register',formData,{
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await res.data
        if(typeof window !== 'undefined'){
            if(data?.token){
                localStorage.setItem('jwt',data?.token)
            }
        }
        dispatch({
            type:APITypes.API_REGISTER,
            user:data?.user,
            token:data?.token,
            data:data,
            route:data?.route
        })
    }catch(err){
        console.log(err)
        dispatch({
            type:APITypes.API_REGISTER,
            data:err
        })
    }

}
export const login = (formData:any) => async(dispatch:Dispatch) =>{
    try{
        const res = await axios.post('/api/login',formData,{
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await res.data
        if(typeof window !== 'undefined'){
            if(data){
                localStorage.setItem('jwt',data.token)
            }
        }
        dispatch({
            type:APITypes.API_LOGIN,
            data:data,
            user:data.user,
            token:data.token,
            route:data.route
        })
    }catch(err){
        dispatch({
            type:APITypes.API_LOGIN,
            data:err
        })
    }

}
export const logout = () => async(dispatch:Dispatch) =>{
    if(typeof window !== 'undefined'){
        localStorage.removeItem('jwt')
        dispatch({
            type:APITypes.API_LOGOUT,
            token:null,
            route:'/credentials'
        })
    }
}
export const updateCart = (cart:Interfaces.CartItem[],user:Interfaces.User) => async(dispatch:Dispatch) =>{
    const token = getToken()
    try{
        const res = await axios.post('/api/update-cart',{
            cart:cart,
            user_id:user.id 
        },{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        const data = await res.data
        dispatch({
            type:APITypes.API_UPDATE_CART,
            data:data
        })
    }catch(err){
        console.log(err)
        dispatch({
            type:APITypes.API_UPDATE_CART,
            data:{
                msg:"Cart Not Updated"
            }
        })
    }
}
export const updateProfile = (user:Interfaces.User) => async(dispatch:Dispatch) =>{
    const token = getToken()
    try{
        const res = await axios.post('/api/update-profile',user,{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        const data = await res.data
        dispatch({
            type:APITypes.API_UPDATE_CART,
            data:data
        })
    }catch(err){
        console.log(err)
        dispatch({
            type:APITypes.API_UPDATE_CART,
            data:{
                msg:"Profile Not Updated"
            }
        })
    }
}
