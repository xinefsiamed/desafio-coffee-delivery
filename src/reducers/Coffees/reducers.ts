import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface ICoffee {
  id: number
  img: any
  name: string
  tags: string[]
  description: string
  price: number
  quantity?: number
}

interface ICoffeesCartState {
  coffeesCart: ICoffee[]
}

export function coffeesCartReducer(state: ICoffeesCartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT:
      return produce(state, (draft) => {
        const coffeeAlreadyExistsId = draft.coffeesCart.findIndex(
          (coffee) => coffee.id === action.payload.newProduct.id,
        )

        console.log(coffeeAlreadyExistsId)

        if (coffeeAlreadyExistsId >= 0) {
          draft.coffeesCart[coffeeAlreadyExistsId].quantity +=
            action.payload.newProduct.quantity

          return
        }

        draft.coffeesCart.push(action.payload.newProduct)
      })

    default:
      return state
  }
}
