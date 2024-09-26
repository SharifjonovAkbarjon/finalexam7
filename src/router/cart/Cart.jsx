import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../context/cart-slice';
import { HiOutlineXMark } from 'react-icons/hi2';
import Counter from '../../components/counter/Counter';

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  console.log(cart);

  const dispatch = useDispatch();

  const laylo = cart.length === 0 ? (
    <p>Your cart is empty.</p>
  ) : (
    <ul className='flex flex-col  w-[full]'>
      {cart.map((item) => (
        <li key={item.id} className='flex items-center'>
          <div className='flex items-center '>
            <button className='mt-[-70px]' onClick={() => dispatch(removeFromCart(item))}><HiOutlineXMark /></button>
            <div className='flex items-center gap-[30px]'>
              <img className='w-[155px] h-[155px] p-[10px]' src={item.image_url} alt="" />
              <div className='flex flex-col gap-[7px]'>
                <p className='text-[20px] font-bold'>{item.brand_name}</p>
                <p className='text-[18px]'>{item.name}</p>
                <div className='flex flex-col gap-[7px] mt-2'>
                  <p className='font-medium'>Black</p>
                  <p className='text-[rgb(11,164,45)]'>In stock</p>
                </div>
              </div>
            </div>
            <div>
              frvmk
            </div>
            <p className='text-[24px] font-bold ml-[100px]'>$ {item.price}</p>
          </div>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      <div className='bg-white pb-[50px]'>
        <div className='container '>
          <div className='flex flex-col gap-[52px]'>
            <NavLink to="/product">
              <div className='flex items-center gap-3'>
                <FaArrowLeftLong />
                Back to Shopping
              </div>
            </NavLink>
            <h2 className='text-[32px] text-[rgb(13,38,18)] font-medium mb-[50px]'>SHOPPING CART</h2>
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-[10px]'>
              <div className='flex flex-col gap-[10px] '>
                <div className='w-full h-[1px] border bg-black opacity-25 border-dashed'></div>
                <div className='flex items-center justify-between'>
                  <p className='text-[22px] text-[rgb(13,38,18)] font-medium'>Product</p>
                  <p className='text-[22px] text-[rgb(13,38,18)] ml-[340px] font-medium'>Quantity</p>
                  <p className='text-[22px] text-[rgb(13,38,18)] font-medium'>Price</p>
                </div>
                <div className='w-full h-[1px] border bg-black opacity-25 border-dashed'></div>
              </div>
              <div className='w-[620px]'>
                {laylo}
                <div className='w-full h-[1px] border bg-black opacity-25 border-dashed'></div>
              </div>
            </div>
            <div className='bg-[rgb(233,232,231)] min-h-[100%] w-[1px]'></div>
            <div className=' w-[40%] px-[10px] flex flex-col gap-[33px]'>
              <div className='flex flex-col gap-[5px]'>
                <h2 className='text-[32px] font-bold'>CART TOTALS</h2>
                <div className='w-full h-[1px] border bg-black opacity-25 border-dashed'></div>
              </div>
              <div className='flex flex-col gap-[21px] mt-[37px]'>
                <div className='flex items-center justify-between'>
                  <p className='text-[18px]'>Shipping (3-5 Business Days)</p>
                  <p className='text-[18px] font-bold'>Free</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='text-[18px]'>TAX (estimated for the United States (US))</p>
                  <p className='text-[18px] font-bold'>$0</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='text-[18px]'>Subtotal</p>
                  <p className='text-[18px] font-bold'>fee</p>
                </div>
              </div>
              <div className='w-full h-[1px] border bg-black opacity-25 border-dashed'></div>
              <div className='flex flex-col gap-[46px] '>
                <div className='flex items-center justify-between'>
                  <p className='text-[18px] font-bold'>Total</p>
                  <p className='text-[18px] font-bold'>Total</p>
                </div>
                <div>
                  <button className='bg-[rgb(11,164,45)] w-full mt-[25px] text-white text-[18px] py-[16px]  rounded-[10px]'>Proceed to Checkout</button>
                </div>

                <NavLink to="/product">
                  <div className='flex items-center justify-center gap-3 font-medium'>
                    <FaArrowLeftLong />
                    Back to Shopping
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Cart;

