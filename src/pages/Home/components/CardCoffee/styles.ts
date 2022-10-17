import styled from 'styled-components'

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  max-width: 16rem;
  max-height: 19.37rem;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;

  img {
    height: 7.5rem;
    width: 7.5rem;

    margin-top: -20px;
    margin-bottom: 0.75rem;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 0.25rem;

    list-style: none;

    li {
      background: ${(props) => props.theme['yellow-light']};
      padding: 4px 8px;

      border-radius: 100px;

      color: ${(props) => props.theme['yellow-dark']};
      font-weight: 700;
      font-size: 0.625rem;
      line-height: 130%;

      text-transform: uppercase;
    }
  }

  footer {
    width: 100%;
    display: flex;
    margin-bottom: 1.25rem;

    justify-content: space-around;
    align-items: center;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export const CardTitleDescription = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;

  padding: 1.25rem;

  h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-label']};
  }
`
export const CounterAndButton = styled.div`
  form {
    display: flex;

    gap: 0.5rem;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 6px;

      padding: 0.5rem;
      gap: 0.25rem;

      background: ${(props) => props.theme['base-button']};

      svg {
        color: ${(props) => props.theme.purple};
        cursor: pointer;
      }

      svg:hover {
        color: ${(props) => props.theme['purple-dark']};
      }

      button {
        border: none;
        background-color: transparent;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    button[type='submit'] {
      display: flex;

      justify-content: center;
      align-items: center;

      padding: 0.5rem;

      border: 0;
      border-radius: 6px;

      background-color: ${(props) => props.theme['purple-dark']};
      transition: background 0.1s;

      cursor: pointer;

      svg {
        color: ${(props) => props.theme['base-card']};
      }

      &:hover {
        background-color: ${(props) => props.theme.purple};
      }
    }
  }
`

export const Price = styled.span`
  font-family: 'baloo 2';
  font-weight: 800;

  font-size: 1.5rem;

  &::before {
    content: 'R$ ';
    font-family: 'Roboto';
    font-weight: 400;
    line-height: 130%;

    font-size: 0.75rem;
  }
`

export const SpecificationCoffeeContainer = styled.div``
