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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
export const PaymentMethodButtons = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2rem;

  .selected {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }

  button {
    padding: 1rem;

    color: ${(props) => props.theme['base-text']};
    text-transform: uppercase;
    font-size: 0.75rem;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: none;
    border-radius: 6px;

    background-color: ${(props) => props.theme['base-button']};
    transition: backgroud 0.2s;

    min-width: 11rem;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      background-color: ${(props) => props.theme['base-hover']};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const SelectedCoffeesList = styled.div`
  margin-top: 1rem;
  border-radius: 6px 44px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  gap: 1.25rem;

  background-color: ${(props) => props.theme['base-card']};

  button[type='submit'] {
    padding: 0.75rem;

    text-transform: uppercase;
    border: none;

    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};

    font-size: 0.875rem;
    font-weight: 700;
    font-stretch: 100;
    line-height: 160%;

    border-radius: 6px;

    transition: all 0.1s;

    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }

    &:disabled {
      opacity: 75%;
      cursor: not-allowed;
    }
  }
`
export const EmptyCoffeeList = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  opacity: 50%;

  p {
    margin-top: 2rem;
  }
`
