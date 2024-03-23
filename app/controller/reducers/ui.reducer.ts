import { UITypes } from "../types"
import { UIActions } from "../actions/ui.actions"
import { isCartFiltered } from "../action-creators/ui.action-creators";

interface InitState {
    language:string;
    currency:string;
    aboutCarouselMainImageSrc:string;
    detailsCarouselMainImageSrc:string;
    refresh:boolean;
    isCartFiltered:boolean;
}

const initState:InitState = {
    language:'English',
    currency:'USD',
    aboutCarouselMainImageSrc:'/assets/about/carousel-1.png',
    detailsCarouselMainImageSrc:'/assets/global/product-1.png',
    refresh:false,
    isCartFiltered:false
}

export default (state:InitState = initState,action:UIActions) =>{
    switch(action.type){
        case UITypes.UI_REFRESH:
            return {
                ...state,
                refresh:action.refresh
            }
        case UITypes.UI_IS_CART_FILTERED:
            return {
                ...state,
                isCartFiltered:action.isCartFiltered
            }
        case UITypes.UI_CHANGE_LANGUAGE:
            return {
                ...state,
                language:action.language
            }
        case UITypes.UI_CHANGE_CURRENCY_STRING:
            return {
                ...state,
                currency:action.currency
            }
        case UITypes.UI_ABOUT_CAROUSEL_SET_MAIN_IMAGE:
            return {
                ...state,
                aboutCarouselMainImageSrc:action.aboutCarouselMainImageSrc
            }
        case UITypes.UI_DETAILS_CAROUSEL_SET_MAIN_IMAGE:
            return {
                ...state,
                detailsCarouselMainImageSrc:action.detailsCarouselMainImageSrc
            }
        default:
            return {
                ...state
            }
        }
    }