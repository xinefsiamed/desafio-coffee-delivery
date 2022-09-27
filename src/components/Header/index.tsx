import { ShoppingCart, MapPin } from 'phosphor-react'

import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo do Coffe Delivery" />

      <nav>
        <NavLink to="/" title="Localização">
          <MapPin size={20} weight="fill" /> <span>Porto Alegre, RS</span>
        </NavLink>
        <NavLink to="/checkout" title="Finalizar compra">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
