import { HeadAndTitle } from './components/HeadAndTitle'

import Coffe from '../../assets/Coffee.svg'

import {
  CardTitleDescription,
  CoffeCard,
  CoffesContainer,
  CoffesSection,
  ContentContainer,
  CounterAndButton,
  HeadlineSection,
  Price,
} from './styles'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

export function Home() {
  return (
    <ContentContainer>
      <HeadlineSection>
        <HeadAndTitle />
      </HeadlineSection>

      <CoffesSection>
        <h2>Nossos Cafés</h2>

        <CoffesContainer>
          <CoffeCard>
            <img src={Coffe} alt="" />

            <div>
              <ul>
                <li>tradicional</li>
                <li>gelado</li>
              </ul>
            </div>

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
          </CoffeCard>
        </CoffesContainer>
      </CoffesSection>
    </ContentContainer>
  )
}
