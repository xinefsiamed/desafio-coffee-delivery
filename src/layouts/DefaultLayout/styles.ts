import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  height: 100vh;

  margin: 0 auto;
  display: flex;
  flex-direction: column;

  align-items: center;

  background: ${(props) => props.theme.background};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`
