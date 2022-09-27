import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      gap: 2px;

      padding: 0.5rem;
      border-radius: 6px;

      text-decoration: none;

      &:first-child {
        background: ${(props) => props.theme['purple-light']};
        font-size: 0.75rem;
        line-height: 1.3rem;
        color: ${(props) => props.theme.purple};

        transition: all 0.2s;

        &:hover {
          background: ${(props) => props.theme['purple-dark']};
          color: ${(props) => props.theme.white};
        }
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
