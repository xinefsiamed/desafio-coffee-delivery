import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { coffeesCartReducer, ICoffee } from '../reducers/Coffees/reducers'
import { coffeesDB } from '../db/coffeesDB'
import { addNewProduct } from '../reducers/Coffees/actions'

interface IInsertNewCoffeInCartData {
  id: number
  quantity: number
}

interface ICoffeesType {
  coffeeState: ICoffee[]
  coffeesCart: ICoffee[]

  insertNewCoffeeInCart: (data: IInsertNewCoffeInCartData) => void
}

export const CoffeesContext = createContext({} as ICoffeesType)

interface ICoffeesContext {
  children: ReactNode
}

export function CoffeesContextProvider({ children }: ICoffeesContext) {
  const [coffeeState, setCoffeeState] = useState<ICoffee[]>([])

  useEffect(() => {
    setCoffeeState(coffeesDB)
  }, [])

  const [coffeesCartState, dispatch] = useReducer(coffeesCartReducer, {
    coffeesCart: [],
  })

  const { coffeesCart } = coffeesCartState

  function insertNewCoffeeInCart(data: IInsertNewCoffeInCartData) {
    const coffeeProduct = coffeeState.find(
      (product) => product.id === data.id,
    ) as ICoffee

    coffeeProduct.quantity = data.quantity

    dispatch(addNewProduct(coffeeProduct))
  }

  return (
    <CoffeesContext.Provider
      value={{ coffeeState, coffeesCart, insertNewCoffeeInCart }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
