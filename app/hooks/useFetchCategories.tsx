'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { headers } from 'next/headers';

interface Category{
    id:number;
    img:string;
    category:string;
}

const useFetchCategories = (url:string) => {

  const [categories,setCategories] = useState<Category[]>([])

  const handleFetch = async() =>{
    try{
        const res = await axios.get(url,{ headers:{
            "Content-Type":"application/json"
        }}) 
        const data = await res.data
        setCategories(data)
   } catch(err){
        console.log(err)
   }
  }

  useEffect(()=>{
    handleFetch()
  },[url])

  return [categories,setCategories]
}

export default useFetchCategories
