import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/ShoppingCartContext'
import { TotalAmountFooter, TotalContainer } from './styles'

export function TotalAmount() {
  const { totalOfProductsAmount, shippingPrice, totalAmount } =
    useContext(CoffeesContext)

  return (
    <TotalAmountFooter>
      <div>
        <p>Total de items</p>
        <span>{totalOfProductsAmount.toFixed(2)}</span>
      </div>

      <div>
        <p>Entrega</p>
        <span>{shippingPrice.toFixed(2)}</span>
      </div>

      <TotalContainer>
        <p>Total</p>
        <span>{totalAmount.toFixed(2)}</span>
      </TotalContainer>
    </TotalAmountFooter>
  )
}
