import styled from 'styled-components'

export const HeaderDiv = styled.header`
  width: 100%;
  top: 0;
  position: sticky;

  background-color: ${(props) => props.theme.background};
`

export const HeaderContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  padding: 2rem 0rem;
  img {
    max-width: 84.95px;
  }

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      gap: 0.25rem;
      padding: 0.5rem;

      border-radius: 6px;

      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.1375rem;

      &:first-child {
        background: ${(props) => props.theme['purple-light']};

        color: ${(props) => props.theme['purple-dark']};
        transition: all 0.2s;
      }

      &:nth-child(2) {
        background: ${(props) => props.theme['yellow-light']};

        color: ${(props) => props.theme['yellow-dark']};

        transition: all 0.2s;

        &:hover {
          background-color: ${(props) => props.theme['yellow-dark']};
          color: ${(props) => props.theme['yellow-light']};
        }
      }
    }
  }
`
