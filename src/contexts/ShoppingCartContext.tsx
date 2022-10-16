import { createContext, ReactNode, useReducer } from 'react'
import { coffeesReducer, ICoffee } from '../reducers/Coffees/reducers'

interface IShoppingCartType {
  coffees: ICoffee[]
}

export const ShoppingCartContext = createContext({} as IShoppingCartType)

interface IShoppingCartContextProps {
  children: ReactNode
}

export function ShoppingCartContextProvider({
  children,
}: IShoppingCartContextProps) {
  const [coffeesState, dispatch] = useReducer(coffeesReducer, {
    coffees: [],
  })

  const { coffees } = coffeesState

  return <ShoppingCartContextProvider>{children}</ShoppingCartContextProvider>
}
