import React from 'react'
import "./cart.css"
import { useContext } from 'react'
import{StoreContext} from '../../components/context/StoreContext'

const Cart = () => {
  const{cartItems,food_list,removeFromCart}=useContext(StoreContext)
  return (
    <div>

    </div>
  )
}

export default Cart