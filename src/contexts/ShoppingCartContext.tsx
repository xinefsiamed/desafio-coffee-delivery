import { createContext } from 'react'
import { ICoffee } from '../reducers/Coffees/reducers'

interface IShoppingCartType {
  products: ICoffee[]
}

export const ShoppingCartContext = createContext({} as IShoppingCartType)
