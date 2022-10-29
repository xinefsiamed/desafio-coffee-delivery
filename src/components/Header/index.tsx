import { ShoppingCart, MapPin } from 'phosphor-react'
import { useContext } from 'react'

import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { CoffeesContext } from '../../contexts/ShoppingCartContext'
import { CounterProductsInCart, HeaderContainer, HeaderDiv } from './styles'

export function Header() {
  const { productsInCart } = useContext(CoffeesContext)

  return (
    <HeaderDiv>
      <HeaderContainer>
        <img src={Logo} alt="Logo do Coffee Delivery" />

        <nav>
          <NavLink to="/" title="Localização">
            <MapPin size={22} weight="fill" color="#8047f8" />{' '}
            <span>Porto Alegre, RS</span>
          </NavLink>
          <NavLink to="/checkout" title="Finalizar compra">
            <ShoppingCart size={22} weight="fill" />
            {productsInCart !== 0 ? (
              <CounterProductsInCart>{productsInCart}</CounterProductsInCart>
            ) : null}
          </NavLink>
        </nav>
      </HeaderContainer>
    </HeaderDiv>
  )
}
