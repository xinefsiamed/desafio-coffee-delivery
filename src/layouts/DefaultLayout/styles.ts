import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  align-items: center;

  @media (max-width: 1140px) {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 83.4%;
  }
`
