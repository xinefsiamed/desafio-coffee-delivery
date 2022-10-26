import {
  Break,
  CepInput,
  CityInput,
  ComplementInput,
  DistrictInput,
  Inputs,
  NumberInput,
  StreetInput,
  UFInput,
} from './style'
import { useFormContext } from 'react-hook-form'

export function FormInputs() {
  const { register } = useFormContext()
  return (
    <Inputs>
      <CepInput
        placeholder="CEP"
        id="cep"
        minLength={8}
        maxLength={8}
        {...register('cep')}
      />
      <Break />
      <StreetInput placeholder="Rua" id="street" {...register('street')} />
      <NumberInput placeholder="Número" id="number" {...register('number')} />
      <ComplementInput
        placeholder="Complemento"
        id="complement"
        {...register('complement')}
      />
      <DistrictInput
        placeholder="Bairro"
        id="district"
        {...register('district')}
      />
      <CityInput placeholder="Cidade" id="city" {...register('city')} />
      <UFInput placeholder="UF" id="uf" {...register('uf')} />
    </Inputs>
  )
}
