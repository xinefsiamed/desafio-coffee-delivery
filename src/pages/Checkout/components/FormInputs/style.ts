import styled from 'styled-components'

export const Inputs = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-flow: wrap;
  justify-content: space-between;

  gap: 1rem 0.75rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const BaseInput = styled.input`
  background: ${(props) => props.theme['base-input']};

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};

  padding: 0.75rem;
  gap: 0.25rem;

  font-size: 0.875rem;
  line-height: 130%;
`

export const Break = styled.div`
  flex-grow: 1;
  width: 0px;
  height: 0px;
  overflow: hidden;
`

export const CepInput = styled(BaseInput)`
  max-width: 12.5rem;
`

export const StreetInput = styled(BaseInput)`
  flex-basis: 100%;
`

export const NumberInput = styled(BaseInput)``

export const ComplementInput = styled(BaseInput)`
  flex-grow: 1;
`

export const DistrictInput = styled(BaseInput)``

export const CityInput = styled(BaseInput)`
  flex-grow: 1;
`

export const UFInput = styled(BaseInput)`
  max-width: 2.75rem;
`
