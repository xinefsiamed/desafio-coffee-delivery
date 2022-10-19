import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/ShoppingCartContext'

export function Checkout() {
  const { coffeesCart } = useContext(CoffeesContext)

  return <pre>{JSON.stringify(coffeesCart)}</pre>
}
