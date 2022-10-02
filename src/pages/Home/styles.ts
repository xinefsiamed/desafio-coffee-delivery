import styled from 'styled-components'
import Background from '../../assets/Background.svg'

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const HeadlineContainer = styled.section`
  height: 34rem;
  display: flex;

  gap: 3.5rem;
  margin-top: 5.8rem;

  background: url(${Background}) no-repeat;

  justify-content: center;
  align-items: center;
`
