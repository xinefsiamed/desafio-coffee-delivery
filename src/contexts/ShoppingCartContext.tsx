import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { coffeesCartReducer, ICoffee } from '../reducers/Coffees/reducers'

import {
  addNewProduct,
  AddShipmentAmount,
  DecreaseOneFromProduct,
  GetTotalAmount,
  GetTotalOfProductsAmount,
  IncreaseOneFromProduct,
  RemoveCoffeeFromCart,
  TotalProductsInCart,
} from '../reducers/Coffees/actions'

interface IInsertNewCoffeInCartData {
  coffeeToAdd: ICoffee
}

interface ICoffeesType {
  coffeesCart: ICoffee[]
  productsInCart: number
  totalOfProductsAmount: number
  shippingPrice: number
  totalAmount: number

  insertNewCoffeeInCart: (data: IInsertNewCoffeInCartData) => void
  decreaseOneFromCoffee: (id: number) => void
  increaseOneFromCoffee: (id: number) => void
  removeCoffeeFromCart: (id: number) => void
}

export const CoffeesContext = createContext({} as ICoffeesType)

interface ICoffeesContext {
  children: ReactNode
}

export function CoffeesContextProvider({ children }: ICoffeesContext) {
  const [coffeesCartState, dispatch] = useReducer(coffeesCartReducer, {
    coffeesCart: [],
    productsInCart: 0,
    totalOfProductsAmount: 0,
    shippingPrice: 0,
    totalAmount: 0,
  })

  const {
    coffeesCart,
    productsInCart,
    totalOfProductsAmount,
    shippingPrice,
    totalAmount,
  } = coffeesCartState

  useEffect(() => {
    if (coffeesCart.length !== 0) {
      const totalCoffeesAmount = coffeesCart
        .map((coffee) => coffee.quantity)
        .reduce((coffee, nextCoffee) => coffee + nextCoffee)

      dispatch(TotalProductsInCart(totalCoffeesAmount))
      dispatch(GetTotalOfProductsAmount())
      dispatch(AddShipmentAmount(3.5))
      dispatch(GetTotalAmount())
    } else {
      dispatch(TotalProductsInCart(0))
      dispatch(GetTotalOfProductsAmount())
      dispatch(AddShipmentAmount(0))
      dispatch(GetTotalAmount())
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

  function removeCoffeeFromCart(id: number) {
    dispatch(RemoveCoffeeFromCart(id))
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffeesCart,
        productsInCart,
        totalOfProductsAmount,
        shippingPrice,
        totalAmount,
        insertNewCoffeeInCart,
        decreaseOneFromCoffee,
        increaseOneFromCoffee,
        removeCoffeeFromCart,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
