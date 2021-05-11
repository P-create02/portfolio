import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const openSidebar = () =>{
    setIsOpen(true)
  }
  const closeSidebar = () =>{
    setIsOpen(false)
  }

  return (
    <AppContext.Provider value={{ isOpen, openSidebar, closeSidebar }}>{children}</AppContext.Provider>
  )
}

export const useNavContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }