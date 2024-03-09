import { APITypes } from "../types"
import * as Interfaces from '@/app/controller/interfaces'

interface SET_PRODUCTS{
    type:APITypes.API_SET_PRODUCTS,
    products:Interfaces.Product[]
}
export type APIActions = SET_PRODUCTS