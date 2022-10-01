import { ShoppingCart, MapPin } from 'phosphor-react'

import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { HeaderContainer, HeaderDiv } from './styles'

export function Header() {
  return (
    <HeaderDiv>
      <HeaderContainer>
        <img src={Logo} alt="Logo do Coffe Delivery" />

        <nav>
          <NavLink to="/" title="Localização">
            <MapPin size={22} weight="fill" color="#8047f8" />{' '}
            <span>Porto Alegre, RS</span>
          </NavLink>
          <NavLink to="/checkout" title="Finalizar compra">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </nav>
      </HeaderContainer>
    </HeaderDiv>
  )
}
