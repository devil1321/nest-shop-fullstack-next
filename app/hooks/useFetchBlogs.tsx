'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { headers } from 'next/headers';
import * as Interfaces from '@/app/controller/interfaces'

const useFetchBlogs = (url:string) => {

  const [blogs,setBlogs] = useState<Interfaces.Blog[]>([])

  const handleFetch = async() =>{
    try{
        const res = await axios.get(url,{ headers:{
            "Content-Type":"application/json"
        }}) 
        const data = await res.data
        setBlogs([...data])
   } catch(err){
        console.log(err)
        setBlogs([])
   }
  }

  useEffect(()=>{
    handleFetch()
  },[url])

  return [blogs,setBlogs]
}

export default useFetchBlogs
