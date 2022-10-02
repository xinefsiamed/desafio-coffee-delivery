import styled from 'styled-components'
import Background from '../../assets/Background.svg'

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const HeadlineContainer = styled.section`
  width: 90rem;
  height: 34rem;
  display: flex;

  gap: 3.5rem;
  margin-top: 5.8rem;

  background: url(${Background});
  background-size: cover;

  justify-content: center;
  align-items: center;
`
