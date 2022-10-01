import {
  ArticleContainer,
  ArticleFooter,
  ContentContainer,
  HeadlineContainer,
  ItemContainer,
  ItemImageContainer,
  SpecificationItem,
} from './styles'
import coffeDeliveryImage from '../../assets/coffeDeliveryImage.svg'
import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'

export function Home() {
  return (
    <ContentContainer>
      <HeadlineContainer>
        <ArticleContainer>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ArticleFooter>
            <SpecificationItem>
              <ItemContainer>
                <ItemImageContainer background_item_color="orange">
                  <ShoppingCartSimple weight="fill" size={16} />
                </ItemImageContainer>
                <span>Compra simples e segura</span>
              </ItemContainer>
            </SpecificationItem>

            <SpecificationItem>
              <ItemContainer>
                <ItemImageContainer background_item_color="gray">
                  <Package weight="fill" size={16} />
                </ItemImageContainer>
                <span>Embalagem mantém o café intacto</span>
              </ItemContainer>
            </SpecificationItem>

            <SpecificationItem>
              <ItemContainer>
                <ItemImageContainer background_item_color="yellow">
                  <Timer weight="fill" size={16} />
                </ItemImageContainer>
                <span>Entrega rápida e rastreada</span>
              </ItemContainer>
            </SpecificationItem>

            <SpecificationItem>
              <ItemContainer>
                <ItemImageContainer background_item_color="purple">
                  <Coffee weight="fill" size={16} />
                </ItemImageContainer>
                <span>O café chega fresquinho até você</span>
              </ItemContainer>
            </SpecificationItem>
          </ArticleFooter>
        </ArticleContainer>
        <img src={coffeDeliveryImage} alt="Um copo de café com grãos ao lado" />
      </HeadlineContainer>
    </ContentContainer>
  )
}
