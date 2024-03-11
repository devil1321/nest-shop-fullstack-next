import { Dispatch } from "redux";
import { UITypes } from "../types";

export const changeLanguage = (ln:string) => (dispatch:Dispatch) =>{
    dispatch({
        type:UITypes.UI_CHANGE_LANGUAGE,
        language:ln
    })
}
export const changeCurrency = (currency:string) => (dispatch:Dispatch) =>{
    dispatch({
        type:UITypes.UI_CHANGE_CURRENCY_STRING,
        currency:currency
    })
}

export const setAboutCarouselImageSrc = (src:string) => (dispatch:Dispatch) =>{
    dispatch({
        type:UITypes.UI_ABOUT_CAROUSEL_SET_MAIN_IMAGE,
        aboutCarouselMainImageSrc:src
    })
}










