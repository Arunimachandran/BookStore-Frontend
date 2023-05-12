import React, { createContext, useContext, useEffect, useState } from 'react'

const Cartcontext=createContext()
const CartProvider = ({children}) => {
  const [cart, setcart] = useState([])
  useEffect(() => {
    const getcartitem= localStorage.getItem('cart')
    if(getcartitem)
    {
      setcart(JSON.parse(getcartitem))
    }
  }, [])
  
  return (
    <div>
    <Cartcontext.Provider value={[cart,setcart]}>
    {children}
    </Cartcontext.Provider>
    </div>
  )
}

const useCart = () =>{return useContext(Cartcontext)}
export  {useCart ,CartProvider}
