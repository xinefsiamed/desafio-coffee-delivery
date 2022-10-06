import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import Coffee from '../../../../assets/Coffee.svg'
import {
  CardTitleDescription,
  CoffeeCard,
  CounterAndButton,
  Price,
  SpecificationCoffeeContainer,
} from './styles'

export function CardCoffee() {
  return (
    <CoffeeCard>
      <img src={Coffee} alt="" />

      <SpecificationCoffeeContainer>
        <ul>
          <li>tradicional</li>
          <li>gelado</li>
        </ul>
      </SpecificationCoffeeContainer>

      <CardTitleDescription>
        <h3>Expresso Tradicional</h3>

        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CardTitleDescription>

      <footer>
        <Price>9,90</Price>

        <CounterAndButton>
          <div>
            <Minus width={14} weight="bold" /> 1{' '}
            <Plus width={14} weight="bold" />
          </div>

          <button>
            <ShoppingCartSimple weight="fill" />
          </button>
        </CounterAndButton>
      </footer>
    </CoffeeCard>
  )
}
