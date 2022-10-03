import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;

  margin: 0 auto;
  display: flex;
  flex-direction: column;

  align-items: center;

  background: ${(props) => props.theme.background};

  @media (max-width: 1140px) {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 83.4%;
  }
`
