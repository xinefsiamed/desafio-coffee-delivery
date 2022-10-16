import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

import {
  CardTitleDescription,
  CoffeeCard,
  CounterAndButton,
  Price,
  SpecificationCoffeeContainer,
} from './styles'

interface ICardCoffeeProps {
  img: string
  name: string
  tags: string[]
  description: string
  price: number
}

export function CardCoffee({
  img,
  name,
  tags,
  description,
  price,
}: ICardCoffeeProps) {
  return (
    <CoffeeCard>
      <img src={img} alt="" />

      <SpecificationCoffeeContainer>
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </SpecificationCoffeeContainer>

      <CardTitleDescription>
        <h3>{name}</h3>

        <p>{description}</p>
      </CardTitleDescription>

      <footer>
        <Price>{price}</Price>

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
