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
        draft.coffeesCart.push(action.payload.newProduct)
      })

    default:
      return state
  }
}
