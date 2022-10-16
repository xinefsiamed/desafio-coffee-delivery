import { createContext, ReactNode, useEffect, useState } from 'react'
import { ICoffee } from '../reducers/Coffees/reducers'
import { coffeesDB } from '../db/coffeesDB'

interface ICoffeesType {
  coffeeState: ICoffee[]
}

export const CoffeesContext = createContext({} as ICoffeesType)

interface ICoffeesContext {
  children: ReactNode
}

export function CoffeesContextProvider({ children }: ICoffeesContext) {
  const [coffeeState, setCoffeeState] = useState<any[]>([])

  useEffect(() => {
    setCoffeeState(coffeesDB)
  }, [])

  return (
    <CoffeesContext.Provider value={{ coffeeState }}>
      {children}
    </CoffeesContext.Provider>
  )
}
