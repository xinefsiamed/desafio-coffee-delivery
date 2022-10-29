import { ICoffee } from './reducers'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  TOTAL_PRODUCTS_IN_CART = 'TOTAL_PRODUCTS_IN_CART',
  DECREASE_ONE_FROM_PRODUCT = 'DECREASE_ONE_FROM_PRODUCT',
  INCREASE_ONE_FROM_PRODUCT = 'INCREASE_ONE_FROM_PRODUCT',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
  GET_TOTAL_OF_PRODUCTS_AMOUNT = 'GET_TOTAL_OF_PRODUCTS_AMOUNT',
  ADD_SHIPMENT_AMOUNT = 'ADD_SHIPMENT_AMOUNT',
  GET_TOTAL_AMOUNT = 'GET_TOTAL_AMOUNT',
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

export function RemoveCoffeeFromCart(id: number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      id,
    },
  }
}

export function GetTotalOfProductsAmount() {
  return {
    type: ActionTypes.GET_TOTAL_OF_PRODUCTS_AMOUNT,
  }
}

export function AddShipmentAmount(price: number) {
  return {
    type: ActionTypes.ADD_SHIPMENT_AMOUNT,
    payload: {
      price,
    },
  }
}

export function GetTotalAmount() {
  return {
    type: ActionTypes.GET_TOTAL_AMOUNT,
  }
}
