import { useContext } from 'react'
import * as zod from 'zod'

import { CoffeesContext } from '../../contexts/ShoppingCartContext'

const newShipingValidationForm = zod.object({
  cep: zod.number().min(8, 'Você deve informar um cep valido'),
  street: zod.string().min(5, 'A rua deve ter pelo menos 5 caracteres'),
  number: zod.number(),
  complement: zod.string(),
  district: zod.string(),
  city: zod.string(),
  uf: zod.string().min(2, 'Você deve informar uma UF válida').max(2),
})

export function Checkout() {
  const { coffeesCart } = useContext(CoffeesContext)

  return (
    <div>
      <div>
        <form></form>
      </div>

      <aside>
        <div></div>
      </aside>
    </div>
  )
}
