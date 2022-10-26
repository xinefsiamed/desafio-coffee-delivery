import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  margin-top: 2.5rem;

  h3 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
  }
`

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 40rem 1fr;
  gap: 2rem;
`

export const InputsContainer = styled.div`
  padding: 2.5rem;

  background-color: ${(props) => props.theme['base-card']};

  margin-top: 1rem;

  border-radius: 6px;
`

const baseCardHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`

export const InputsHeader = styled(baseCardHeader)`
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const PaymentMethodContainer = styled(InputsContainer)``

export const PaymentMethodHeader = styled(baseCardHeader)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`
