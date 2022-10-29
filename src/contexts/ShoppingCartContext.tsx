import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { coffeesCartReducer, ICoffee } from '../reducers/Coffees/reducers'

import {
  addNewProduct,
  DecreaseOneFromProduct,
  IncreaseOneFromProduct,
  TotalProductsInCart,
} from '../reducers/Coffees/actions'

interface IInsertNewCoffeInCartData {
  coffeeToAdd: ICoffee
}

interface ICoffeesType {
  coffeesCart: ICoffee[]
  productsInCart: number

  insertNewCoffeeInCart: (data: IInsertNewCoffeInCartData) => void
  decreaseOneFromCoffee: (id: number) => void
  increaseOneFromCoffee: (id: number) => void
}

export const CoffeesContext = createContext({} as ICoffeesType)

interface ICoffeesContext {
  children: ReactNode
}

export function CoffeesContextProvider({ children }: ICoffeesContext) {
  const [coffeesCartState, dispatch] = useReducer(coffeesCartReducer, {
    coffeesCart: [],
    productsInCart: 0,
  })

  const { coffeesCart, productsInCart } = coffeesCartState

  useEffect(() => {
    if (coffeesCart.length !== 0) {
      const totalCoffeesAmount = coffeesCart
        .map((coffee) => coffee.quantity)
        .reduce((coffee, nextCoffee) => coffee + nextCoffee)

      dispatch(TotalProductsInCart(totalCoffeesAmount))
    }
  }, [coffeesCart])

  function insertNewCoffeeInCart(data: IInsertNewCoffeInCartData) {
    const newProduct = data.coffeeToAdd

    dispatch(addNewProduct(newProduct))
  }

  function decreaseOneFromCoffee(id: number) {
    dispatch(DecreaseOneFromProduct(id))
  }

  function increaseOneFromCoffee(id: number) {
    dispatch(IncreaseOneFromProduct(id))
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffeesCart,
        productsInCart,
        insertNewCoffeeInCart,
        decreaseOneFromCoffee,
        increaseOneFromCoffee,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
