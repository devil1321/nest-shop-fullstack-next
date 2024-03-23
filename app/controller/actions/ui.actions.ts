import { UITypes } from "../types"

interface REFRESH{
    type:UITypes.UI_REFRESH,
    refresh:boolean;
}
interface IS_CART_FILTERED{
    type:UITypes.UI_IS_CART_FILTERED,
    isCartFiltered:boolean;
}
interface CHANGE_LANGUAGE{
    type:UITypes.UI_CHANGE_LANGUAGE,
    language:string;
}
interface CHANGE_CURRENCY{
    type:UITypes.UI_CHANGE_CURRENCY_STRING,
    currency:string;
}
interface SET_ABOUT_CAROUSEL_MAIN_IMAGE{
    type:UITypes.UI_ABOUT_CAROUSEL_SET_MAIN_IMAGE,
    aboutCarouselMainImageSrc:string;
}
interface SET_DETAILS_CAROUSEL_MAIN_IMAGE{
    type:UITypes.UI_DETAILS_CAROUSEL_SET_MAIN_IMAGE,
    detailsCarouselMainImageSrc:string;
}


export type UIActions = REFRESH | IS_CART_FILTERED | CHANGE_LANGUAGE | CHANGE_CURRENCY  | SET_ABOUT_CAROUSEL_MAIN_IMAGE | SET_DETAILS_CAROUSEL_MAIN_IMAGE