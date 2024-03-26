'use client'
import { MutableRefObject, useEffect, useRef, useState } from "react";
import Category from "./category.component";
import Filter from "./filter.component";
import Products from "./products.component";
import { useDispatch } from "react-redux";
import * as ApiActions from '@/app/controller/action-creators/api.action-creators'
import { bindActionCreators } from "redux";

const FullSidebar = () =>{

    const [min,setMin] = useState<number>(0)
    const [max,setMax] = useState<number>(400)
    const [category,setCategory] = useState<number>(0)
  
    const dispatch = useDispatch()
    const APIActions = bindActionCreators(ApiActions,dispatch)

    useEffect(()=>{
        APIActions.filterProducts(min,max,category)
    },[min,max,category])

    return(
        <div className="sidebar px-2 md:p-0">
            <Category setCategory={setCategory} />
            <Filter 
                setCategory={setCategory}
                max={max}
                min={min}
                setMax={setMax} 
                setMin={setMin} />
            <Products />
        </div>
    )
}

export default FullSidebar