import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface ICoffee {
  id: number
  img: any
  name: string
  price: number
  quantity: number
}

interface ICoffeesCartState {
  coffeesCart: ICoffee[]
  productsInCart: number
  totalOfProductsAmount: number
  shippingPrice: number
  totalAmount: number
}

export function coffeesCartReducer(state: ICoffeesCartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT:
      return produce(state, (draft) => {
        const coffeeAlreadyExistsId = draft.coffeesCart.findIndex(
          (coffee) => coffee.id === action.payload.newProduct.id,
        )

        if (coffeeAlreadyExistsId >= 0) {
          draft.coffeesCart[coffeeAlreadyExistsId].quantity +=
            action.payload.newProduct.quantity

          return
        }

        draft.coffeesCart.push(action.payload.newProduct)
      })

    case ActionTypes.TOTAL_PRODUCTS_IN_CART:
      return produce(state, (draft) => {
        draft.productsInCart = action.payload.total
      })

    case ActionTypes.DECREASE_ONE_FROM_PRODUCT:
      return produce(state, (draft) => {
        const coffee = draft.coffeesCart.findIndex(
          (coffee) => coffee.id === action.payload.id,
        )

        if (coffee > -1 && draft.coffeesCart[coffee].quantity > 1) {
          draft.coffeesCart[coffee].quantity =
            draft.coffeesCart[coffee].quantity - 1
        }
      })

    case ActionTypes.INCREASE_ONE_FROM_PRODUCT:
      return produce(state, (draft) => {
        const coffee = draft.coffeesCart.findIndex(
          (coffee) => coffee.id === action.payload.id,
        )

        if (coffee > -1) {
          draft.coffeesCart[coffee].quantity =
            draft.coffeesCart[coffee].quantity + 1
        }
      })

    case ActionTypes.REMOVE_PRODUCT_FROM_CART:
      return produce(state, (draft) => {
        draft.coffeesCart = draft.coffeesCart.filter(
          (coffee) => coffee.id !== action.payload.id,
        )
      })

    case ActionTypes.GET_TOTAL_OF_PRODUCTS_AMOUNT:
      return produce(state, (draft) => {
        const hasProductInCart = draft.coffeesCart.length > 0

        if (!hasProductInCart) {
          draft.totalOfProductsAmount = 0
          return
        }

        draft.totalOfProductsAmount = draft.coffeesCart
          .map((coffee) => coffee.quantity * coffee.price)
          .reduce((coffee, nextCoffee) => coffee + nextCoffee)
      })

    case ActionTypes.ADD_SHIPMENT_AMOUNT:
      return produce(state, (draft) => {
        draft.shippingPrice = action.payload.price
      })

    case ActionTypes.GET_TOTAL_AMOUNT:
      return produce(state, (draft) => {
        draft.totalAmount = draft.totalOfProductsAmount + draft.shippingPrice
      })

    default:
      return state
  }
}
