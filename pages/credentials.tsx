'use client'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as ApiActions from '@/app/controller/action-creators/api.action-creators'
import { bindActionCreators } from 'redux'
import { useRouter } from 'next/navigation'
import { State } from '@/app/controller/reducers/root.reducer'

const Credentials = () => {

  const { data,route,token } = useSelector((state:State) => state.api)
  const router = useRouter()

  const [isLoad,setIsLoad] = useState<boolean>(false)
  const [isRegister,setIsRegister] = useState<boolean>(false)
  const [registerFormData,setRegisterFormData] = useState<any>({
    nickname:'',
    email:'',
    password_1:'',
    password_2:'',
    first_name:'',
    last_name:'',
    city:'',
    zip:'',
    phone:''
  })
  const [loginFormData,setLoginFormData] = useState<any>({
    email:'',
    password:'',
  })

  const handleChangeLogin = (e:any) =>{
    setLoginFormData((prevState:any)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  const handleChangeRegister = (e:any) =>{
    setRegisterFormData((prevState:any)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

  const dispatch = useDispatch()
  const APIActions = bindActionCreators(ApiActions,dispatch)

  const handleSubmitLogin = (e:any) =>{
    e.preventDefault()
    const formData = new FormData(e.target)
  }
  const handleSubmitRegister = (e:any) =>{
    e.preventDefault()
    APIActions.register(registerFormData)
  }

  const handleInit = () =>{
    router.push(route)
  }
  useEffect(()=>{
    if(!data){
      APIActions.getUser()
    }
  },[])

  useEffect(()=>{
    handleInit()
  },[token,data])

  return (
    <div>
      {!isRegister
        ? <div className='credentials-login'>
            {data?.msg && <div>{data.msg}</div>}
            <form action="" onSubmit={(e)=>handleSubmitLogin(e)} encType='multipart/form-data'>
              <div className="credentials-register-field">
                <label htmlFor="">Email:</label>
                <input type="email" name="nickname" onChange={(e)=>handleChangeLogin(e)} value={loginFormData.email} />
              </div>
              <div className="credentials-register-field">
                <label htmlFor="">Password:</label>
                <input type="password" name="email" onChange={(e)=>handleChangeLogin(e)} value={loginFormData.password}/>
              </div>
              <button className='' onClick={()=>setIsRegister(true)}>Register</button>
              <button type="submit">Login</button>
            </form>
          </div>
        : <div className='credentials-login'>
          {data?.msg && <div>{data.msg}</div>}
          <form action="" onSubmit={(e)=>handleSubmitRegister(e)} encType='multipart/form-data'>
            <div className="credentials-register-field">
              <label htmlFor="">Nickname:</label>
              <input type="text" name="nickname" onChange={(e)=>handleChangeRegister(e)} value={registerFormData.nickname}/>
            </div>
            <div className="credentials-register-field">
              <label htmlFor="">Email:</label>
              <input type="email" name="email" onChange={(e)=>handleChangeRegister(e)}  value={registerFormData.email}/>
            </div>
            <div className="credentials-register-field">
              <label htmlFor="">Password:</label>
              <input type="password" name="password_1" onChange={(e)=>handleChangeRegister(e)} value={registerFormData.password_1}/>
            </div>
            <div className="credentials-register-field">
              <label htmlFor="">Confirm Password:</label>
              <input type="password" name="password_2" onChange={(e)=>handleChangeRegister(e)} value={registerFormData.password_2}/>
            </div>
            <div className="credentials-register-field">
              <label htmlFor="">First Name:</label>
              <input type="text" name="first_name" onChange={(e)=>handleChangeRegister(e)} value={registerFormData.first_name}/>
            </div>
            <div className="credentials-register-field">
              <label htmlFor="">Last Name:</label>
              <input type="text" name='last_name' onChange={(e)=>handleChangeRegister(e)} value={registerFormData.last_name}/>
            </div>
            <div className="credentials-register-field">
              <label htmlFor="">City:</label>
              <input type="text" name="city" onChange={(e)=>handleChangeRegister(e)} value={registerFormData.city} />
            </div>
            <div className="credentials-register-field">
              <label htmlFor="">Zip:</label>
              <input type="text" name="zip" onChange={(e)=>handleChangeRegister(e)} value={registerFormData.zip}/>
            </div>
            <div className="credentials-register-field">
              <label htmlFor="">Phone:</label>
              <input type="text" name="phone" onChange={(e)=>handleChangeRegister(e)} value={registerFormData.phone}/>
            </div>
            <button className='' onClick={()=>setIsRegister(false)}>Login</button>
            <button type="submit">Register</button>
          </form>
        </div>}
    </div>
  )
}

export default Credentials
