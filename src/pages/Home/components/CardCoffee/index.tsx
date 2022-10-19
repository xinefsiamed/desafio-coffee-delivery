import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import React, { useContext, useState } from 'react'
import { CoffeesContext } from '../../../../contexts/ShoppingCartContext'
import { ICoffee } from '../../../../reducers/Coffees/reducers'

import {
  CardTitleDescription,
  CoffeeCard,
  CounterAndButton,
  Price,
  SpecificationCoffeeContainer,
} from './styles'

interface ICardCoffeeProps {
  id: number
  img: string
  name: string
  tags: string[]
  description: string
  price: number
}

export function CardCoffee({
  id,
  img,
  name,
  tags,
  description,
  price,
}: ICardCoffeeProps) {
  const [quantity, setQuantity] = useState(1)

  const { insertNewCoffeeInCart } = useContext(CoffeesContext)

  function handleCoffeeSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const newCoffeeToAdd = {
      id,
      description,
      img,
      name,
      price,
      quantity,
    } as ICoffee

    insertNewCoffeeInCart({ coffeeToAdd: newCoffeeToAdd })
  }

  function handleDecreaseQuantityButton(
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    event.preventDefault()

    if (!(quantity <= 1)) {
      setQuantity(quantity - 1)
    }
  }

  function handleIncreaseQuantityButton(
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    event.preventDefault()

    setQuantity(quantity + 1)
  }

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
        <Price>{price.toFixed(2)}</Price>

        <CounterAndButton>
          <form onSubmit={handleCoffeeSubmitForm}>
            <div>
              <button onClick={handleDecreaseQuantityButton}>
                <Minus width={14} weight="bold" />
              </button>

              {quantity}

              <button onClick={handleIncreaseQuantityButton}>
                <Plus width={14} weight="bold" />
              </button>
            </div>

            <button type="submit">
              <ShoppingCartSimple weight="fill" />
            </button>
          </form>
        </CounterAndButton>
      </footer>
    </CoffeeCard>
  )
}
