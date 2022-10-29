import React, { useContext, useState } from 'react'
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
  PaymentMethodButtons,
  SelectedCoffeesList,
  EmptyCoffeeList,
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  SmileySad,
} from 'phosphor-react'
import { FormInputs } from './components/FormInputs'
import { CoffeeCard } from './components/CoffeeCard'
import { TotalAmount } from './components/TotalAmount'

const newShippingValidationForm = zod.object({
  cep: zod.number().min(8, 'Voce deve adicionar um cep válido'),
  street: zod.string().min(5, 'A rua deve ter pelo menos 5 caracteres'),
  number: zod.number(),
  complement: zod.string().nullable(),
  district: zod.string(),
  city: zod.string(),
  uf: zod.string().min(2, 'Você deve informar uma UF válida').max(2),
  paymentMethod: zod.string(),
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

  const { handleSubmit, watch, reset, setValue } = newShippingForm

  function HandleFormSubmit(data: INewShippingFormData) {
    console.log(data)
    reset()
  }

  const [buttonSelected, setButtonSelected] = useState('')

  function HandlePaymentButtonOnClick(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault()

    setButtonSelected((event.target as HTMLElement).id)

    const value = (event.target as HTMLTextAreaElement).value

    setValue('paymentMethod', value)
  }

  const formsInput = watch([
    'street',
    'cep',
    'number',
    'city',
    'uf',
    'paymentMethod',
  ])

  const isCoffeesCartEmpty = coffeesCart.length === 0

  const isSubmitDisable = !formsInput
    .map((el) => Boolean(el))
    .reduce((el, nextEl) => el && nextEl)

  return (
    <CheckoutContainer>
      <FormContainer onSubmit={handleSubmit(HandleFormSubmit)}>
        <div>
          <h3>Complete seu Pedido</h3>
          <InputsContainer>
            <InputsHeader>
              <MapPinLine size={22} />
              <div>
                <p>Endereço da entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </InputsHeader>

            <FormProvider {...newShippingForm}>
              <FormInputs />
            </FormProvider>
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

            <PaymentMethodButtons>
              <button
                id="cc"
                className={buttonSelected === 'cc' ? 'selected' : undefined}
                value="cartão de crédito"
                onClick={HandlePaymentButtonOnClick}
              >
                <CreditCard size={16} />
                Cartão de crédito
              </button>

              <button
                id="cd"
                className={buttonSelected === 'cd' ? 'selected' : undefined}
                value="cartão de débito"
                onClick={HandlePaymentButtonOnClick}
              >
                <Bank size={16} />
                Cartão de débito
              </button>

              <button
                id="money"
                value="cartão de débito"
                className={buttonSelected === 'money' ? 'selected' : undefined}
                onClick={HandlePaymentButtonOnClick}
              >
                <Money size={16} />
                Dinheiro
              </button>
            </PaymentMethodButtons>
          </PaymentMethodContainer>
        </div>

        <aside>
          <h3>Cafés selecionados</h3>

          <SelectedCoffeesList>
            {isCoffeesCartEmpty ? (
              <EmptyCoffeeList>
                <SmileySad size={60} />
                <p>Parece que você não adicionou um produto ainda</p>
              </EmptyCoffeeList>
            ) : (
              coffeesCart.map((coffee) => (
                <CoffeeCard
                  key={coffee.id}
                  id={coffee.id}
                  img={coffee.img}
                  name={coffee.name}
                  price={coffee.price}
                  quantity={coffee.quantity}
                />
              ))
            )}

            <TotalAmount />

            <button type="submit" disabled={isSubmitDisable}>
              Confirmar pedido
            </button>
          </SelectedCoffeesList>
        </aside>
      </FormContainer>
    </CheckoutContainer>
  )
}
