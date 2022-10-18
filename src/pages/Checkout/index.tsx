import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/ShoppingCartContext'

export function Checkout() {
  const { coffeesCart } = useContext(CoffeesContext)

  return <h1>{JSON.stringify(coffeesCart)}</h1>
}
