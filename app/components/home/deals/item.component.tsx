'use client'
import React, { useEffect, useState } from 'react'


const Item:React.FC<{toDate:any}> = ({toDate}) => {

    const [days,setDays] = useState<number>(0)
    const [hours,setHours] = useState<number>(0)
    const [minutes,setMinutes] = useState<number>(0)
    const [seconds,setSeconds] = useState<number>(0)

    const handleCountDown = () =>{
     var x = setInterval(function() {
         var now = new Date().getTime();
         var distance = toDate - now;
         setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
         setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
         setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
         setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
        },1000)
    }

  useEffect(()=>{
    handleCountDown()
  },[])

  return (
    <div>
      
    </div>
  )
}

export default Item
