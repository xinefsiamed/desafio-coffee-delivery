import styled from 'styled-components'

export const TotalAmountFooter = styled.footer`
  width: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  gap: 0.75rem;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }

    span::before {
      content: 'R$ ';
    }
  }
`

export const TotalContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;

  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;

  color: ${(props) => props.theme['base-subtitle']};

  span::before {
    content: 'R$ ';
  }
`
