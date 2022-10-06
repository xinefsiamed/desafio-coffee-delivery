import coffeeDeliveryImage from '../../../../assets/coffeDeliveryImage.svg'
import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'
import {
  ArticleContainer,
  ArticleContent,
  ArticleFooter,
  ItemContainer,
  ItemImageContainer,
  TitleAndSubtitle,
} from './styles'

export function HeadAndTitle() {
  return (
    <ArticleContainer>
      <ArticleContent>
        <TitleAndSubtitle>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitleAndSubtitle>

        <ArticleFooter>
          <ItemContainer>
            <ItemImageContainer background_item_color="orange">
              <ShoppingCartSimple weight="fill" size={16} />
            </ItemImageContainer>
            <span>Compra simples e segura</span>
          </ItemContainer>

          <ItemContainer>
            <ItemImageContainer background_item_color="gray">
              <Package weight="fill" size={16} />
            </ItemImageContainer>
            <span>Embalagem mantém o café intacto</span>
          </ItemContainer>

          <ItemContainer>
            <ItemImageContainer background_item_color="yellow">
              <Timer weight="fill" size={16} />
            </ItemImageContainer>
            <span>Entrega rápida e rastreada</span>
          </ItemContainer>

          <ItemContainer>
            <ItemImageContainer background_item_color="purple">
              <Coffee weight="fill" size={16} />
            </ItemImageContainer>
            <span>O café chega fresquinho até você</span>
          </ItemContainer>
        </ArticleFooter>
      </ArticleContent>
      <img src={coffeeDeliveryImage} alt="Um copo de café com grãos ao lado" />
    </ArticleContainer>
  )
}
