import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  height: 100vh;

  margin: 0 auto;
  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 1rem;

  background: ${(props) => props.theme.background};
`
