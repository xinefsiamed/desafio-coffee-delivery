import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/ShoppingCartContext'
import { CardCoffee } from './components/CardCoffee'
import { HeadAndTitle } from './components/HeadAndTitle'

import {
  CoffeesContainer,
  CoffeesSection,
  ContentContainer,
  HeadlineSection,
} from './styles'

export function Home() {
  const { coffeeState } = useContext(CoffeesContext)

  return (
    <ContentContainer>
      <HeadlineSection>
        <HeadAndTitle />
      </HeadlineSection>

      <CoffeesSection>
        <h2>Nossos Cafés</h2>

        <CoffeesContainer>
          {coffeeState.map((coffee) => (
            <CardCoffee
              key={coffee.id}
              id={coffee.id}
              img={coffee.img}
              description={coffee.description}
              name={coffee.name}
              price={coffee.price}
              tags={coffee.tags}
            />
          ))}
        </CoffeesContainer>
      </CoffeesSection>
    </ContentContainer>
  )
}
