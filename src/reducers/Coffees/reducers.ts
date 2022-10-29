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

    default:
      return state
  }
}
