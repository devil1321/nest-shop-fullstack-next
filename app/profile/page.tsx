'use client'
import React, { useEffect, useState } from 'react'
import * as Interfaces from '../controller/interfaces'
import { useSelector } from 'react-redux'
import { State } from '../controller/reducers/root.reducer'

const Profile = () => {
  const [profile,setProfile] = useState<Interfaces.User>({} as Interfaces.User)
  const { user } = useSelector((state:State) => state.api)

  const handleInit = () =>{
    let tmpProfile:Interfaces.User = {} as Interfaces.User
    if(user){
      for(let key in user){
        // @ts-ignore
        tmpProfile[key as keyof Interfaces.User] = user[key as keyof Interfaces.User] 
      }
      setProfile(tmpProfile)
    }
  }

  useEffect(()=>{
    handleInit()
    console.log(profile)
  },[user])

  return (
    <div>
      
    </div>
  )
}

export default Profile
