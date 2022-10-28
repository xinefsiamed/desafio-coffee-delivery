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
        {...register('cep', { valueAsNumber: true })}
        required
      />
      <Break />
      <StreetInput
        placeholder="Rua"
        id="street"
        {...register('street')}
        required
      />
      <NumberInput
        placeholder="Número"
        id="number"
        {...register('number', { valueAsNumber: true })}
        required
      />
      <ComplementInput
        placeholder="Complemento"
        id="complement"
        {...register('complement')}
      />
      <DistrictInput
        placeholder="Bairro"
        id="district"
        {...register('district')}
        required
      />
      <CityInput
        placeholder="Cidade"
        id="city"
        {...register('city')}
        required
      />
      <UFInput placeholder="UF" id="uf" {...register('uf')} required />
    </Inputs>
  )
}
