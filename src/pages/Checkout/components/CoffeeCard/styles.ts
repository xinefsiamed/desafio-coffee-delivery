import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;

  img {
    max-width: 64px;
  }

  padding-bottom: 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const NameAndPrice = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;

    &::before {
      content: 'R$ ';
    }
  }
`
export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 1.25rem;
  gap: 0.5rem;
`

export const CardFooter = styled.footer`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;

    gap: 0.3rem;

    background-color: ${(props) => props.theme['base-button']};

    border-radius: 6px;

    &:nth-child(2) {
      &:hover {
        background-color: ${(props) => props.theme['base-hover']};
        cursor: pointer;

        svg {
          color: ${(props) => props.theme['purple-dark']};
        }
      }
    }
  }

  button {
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    background-color: transparent;

    svg {
      color: ${(props) => props.theme.purple};

      &:hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }

    &:nth-child(1) {
      font-size: 0.75rem;
      color: ${(props) => props.theme['base-text']};

      transition: backgroud-color 0.1s;
    }
  }
`
