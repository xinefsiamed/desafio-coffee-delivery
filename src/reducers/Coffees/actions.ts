import { ICoffee } from './reducers'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
}

export function addNewProduct(newProduct: ICoffee) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      newProduct,
    },
  }
}
