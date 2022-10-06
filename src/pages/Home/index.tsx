import { CardCoffee } from './components/CardCoffee'
import { HeadAndTitle } from './components/HeadAndTitle'

import {
  CoffeesContainer,
  CoffeesSection,
  ContentContainer,
  HeadlineSection,
} from './styles'

export function Home() {
  return (
    <ContentContainer>
      <HeadlineSection>
        <HeadAndTitle />
      </HeadlineSection>

      <CoffeesSection>
        <h2>Nossos Cafés</h2>

        <CoffeesContainer>
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
        </CoffeesContainer>
      </CoffeesSection>
    </ContentContainer>
  )
}
