import { produce } from 'immer'
import { ActionTypes } from './actions'

type Tags = {
  name: 'TRADICIONAL' | 'COM LEITE' | 'GELADO' | 'ALCOÓLICO' | 'ESPECIAL'
}

export interface ICoffee {
  img: any
  tags: Tags[]
  description: string
  price: number
  quantity: number
}

interface ICoffeesState {
  coffees: ICoffee[]
}

export function coffeesReducer(state: ICoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT:
      return produce(state, (draft) => {
        draft.coffees.push(action.payload.newProduct)
      })

    default:
      return state
  }
}
