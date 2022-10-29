import { Minus, Plus, Trash } from 'phosphor-react'
import React, { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/ShoppingCartContext'
import { Card, CardFooter, CoffeCardContainer, NameAndPrice } from './styles'

interface ICoffeeCardProps {
  id: number
  img: any
  name: String
  price: any
  quantity: any
}

export function CoffeeCard({
  id,
  img,
  name,
  price,
  quantity,
}: ICoffeeCardProps) {
  const { decreaseOneFromCoffee, increaseOneFromCoffee, removeCoffeeFromCart } =
    useContext(CoffeesContext)

  function handleMinusOnClick(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault()
    decreaseOneFromCoffee(id)
  }

  function handlePlusOnClick(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault()
    increaseOneFromCoffee(id)
  }

  function handleRemoveOnClick(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault()
    removeCoffeeFromCart(id)
  }

  return (
    <CoffeCardContainer>
      <img src={img} alt="" />
      <Card>
        <NameAndPrice>
          <h4>{name}</h4>
          <span>{price.toFixed(2)}</span>
        </NameAndPrice>

        <CardFooter>
          <div>
            <button onClick={handleMinusOnClick}>
              <Minus size={16} />
            </button>
            {quantity}
            <button onClick={handlePlusOnClick}>
              <Plus size={16} />
            </button>
          </div>

          <div onClick={handleRemoveOnClick}>
            <button>
              <Trash size={16} />
              REMOVER
            </button>
          </div>
        </CardFooter>
      </Card>
    </CoffeCardContainer>
  )
}
