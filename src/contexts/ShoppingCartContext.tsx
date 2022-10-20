import { createContext, ReactNode, useReducer } from 'react'
import { coffeesCartReducer, ICoffee } from '../reducers/Coffees/reducers'

import { addNewProduct } from '../reducers/Coffees/actions'

interface IInsertNewCoffeInCartData {
  coffeeToAdd: ICoffee
}

interface ICoffeesType {
  coffeesCart: ICoffee[]

  insertNewCoffeeInCart: (data: IInsertNewCoffeInCartData) => void
}

export const CoffeesContext = createContext({} as ICoffeesType)

interface ICoffeesContext {
  children: ReactNode
}

export function CoffeesContextProvider({ children }: ICoffeesContext) {
  const [coffeesCartState, dispatch] = useReducer(coffeesCartReducer, {
    coffeesCart: [],
  })

  const { coffeesCart } = coffeesCartState

  function insertNewCoffeeInCart(data: IInsertNewCoffeInCartData) {
    const newProduct = data.coffeeToAdd

    dispatch(addNewProduct(newProduct))
  }

  return (
    <CoffeesContext.Provider value={{ coffeesCart, insertNewCoffeeInCart }}>
      {children}
    </CoffeesContext.Provider>
  )
}
