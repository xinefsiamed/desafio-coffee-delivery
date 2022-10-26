import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CoffeesContext } from '../../contexts/ShoppingCartContext'

import {
  FormContainer,
  CheckoutContainer,
  InputsContainer,
  InputsHeader,
  PaymentMethodContainer,
  PaymentMethodHeader,
} from './styles'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { FormInputs } from './components/FormInputs'

const newShippingValidationForm = zod.object({
  cep: zod.number().min(8, 'Você deve informar um cep valido'),
  street: zod.string().min(5, 'A rua deve ter pelo menos 5 caracteres'),
  number: zod.number(),
  complement: zod.string().nullable(),
  district: zod.string(),
  city: zod.string(),
  uf: zod.string().min(2, 'Você deve informar uma UF válida').max(2),
})

type INewShippingFormData = zod.infer<typeof newShippingValidationForm>

export function Checkout() {
  const { coffeesCart } = useContext(CoffeesContext)

  const newShippingForm = useForm<INewShippingFormData>({
    resolver: zodResolver(newShippingValidationForm),
    defaultValues: {
      street: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
    },
  })

  const { handleSubmit, watch, reset } = newShippingForm

  return (
    <CheckoutContainer>
      <FormContainer>
        <div>
          <h3>Complete seu Pedido</h3>
          <FormProvider {...newShippingForm}>
            <InputsContainer>
              <InputsHeader>
                <MapPinLine size={22} />
                <div>
                  <p>Endereço da entrega</p>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </InputsHeader>

              <FormInputs />
            </InputsContainer>

            <PaymentMethodContainer>
              <PaymentMethodHeader>
                <CurrencyDollar size={22} />
                <div>
                  <p>Pagamento</p>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </div>
              </PaymentMethodHeader>
            </PaymentMethodContainer>
          </FormProvider>
        </div>

        <aside>
          <h3>Cafés selecionados</h3>
          <div></div>
        </aside>
      </FormContainer>
    </CheckoutContainer>
  )
}
