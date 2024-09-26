import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";


const Cart = () => {
  return (
    <>
      <div className='container'>
        <div className='flex flex-col gap-[52px]'>
          <NavLink to="/product">
            <div className='flex items-center gap-3'>
              <FaArrowLeftLong />
              Back to Shopping
            </div>
          </NavLink>
          <h2 className='text-[32px] text-[rgb(13,38,18)] font-medium'>SHOPPING CART</h2>
        </div>
        <div>
          
        </div>
      </div>
    </>
  )
}

export default Cart