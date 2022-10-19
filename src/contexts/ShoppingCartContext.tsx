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
  coffeeToAdd: ICoffee
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
    const newProduct = data.coffeeToAdd

    console.log(newProduct)

    dispatch(addNewProduct(newProduct))
  }

  return (
    <CoffeesContext.Provider
      value={{ coffeeState, coffeesCart, insertNewCoffeeInCart }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
