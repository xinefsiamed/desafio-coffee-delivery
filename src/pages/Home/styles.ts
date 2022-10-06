import styled from 'styled-components'
import Background from '../../assets/Background.svg'

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const HeadlineSection = styled.section`
  height: 34rem;
  display: flex;

  gap: 3.5rem;
  margin-top: 5.8rem;

  background: url(${Background}) no-repeat;
  background-size: cover;

  justify-content: center;
  align-items: center;
`

export const CoffeesSection = styled.section`
  max-width: 70rem;
  width: 100%;

  padding-top: 4rem;

  margin: 0 auto;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 130%;
    font-size: 2rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeesContainer = styled.div`
  margin-top: 3.375rem;

  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: flex-start;

  gap: 2.5rem 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`
