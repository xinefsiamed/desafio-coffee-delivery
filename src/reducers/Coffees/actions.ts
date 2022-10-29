import { ICoffee } from './reducers'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  TOTAL_PRODUCTS_IN_CART = 'TOTAL_PRODUCTS_IN_CART',
  DECREASE_ONE_FROM_PRODUCT = 'DECREASE_ONE_FROM_PRODUCT',
  INCREASE_ONE_FROM_PRODUCT = 'INCREASE_ONE_FROM_PRODUCT',
}

export function addNewProduct(newProduct: ICoffee) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      newProduct,
    },
  }
}

export function TotalProductsInCart(total: number) {
  return {
    type: ActionTypes.TOTAL_PRODUCTS_IN_CART,
    payload: {
      total,
    },
  }
}

export function DecreaseOneFromProduct(id: number) {
  return {
    type: ActionTypes.DECREASE_ONE_FROM_PRODUCT,
    payload: {
      id,
    },
  }
}

export function IncreaseOneFromProduct(id: number) {
  return {
    type: ActionTypes.INCREASE_ONE_FROM_PRODUCT,
    payload: {
      id,
    },
  }
}
