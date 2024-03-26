'use client'
import React from 'react'
import Image from 'next/image'
import {  useDispatch, useSelector } from 'react-redux'
import { remove } from '../GlobalRedux/Features/shopping/shoppingSlice'

export default function Cart() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.cart.value)

  const totalPrice = basket.reduce((total, phone) => {
    const convertedPrice = parseInt(phone.specifications.Price, 0) 
    return total + convertedPrice
  }, 0);

  return (
    <div className="w-dvw h-dvh  flex justify-center items-center">
        <div className="w-[25rem] h-[20rem] bg-gray-400 rounded-xl flex flex-col justify-center items-center ">
            <p className="text-xl text-white">YOUR ITEMS:</p>
            <div className="overflow-y-scroll">{basket.map((element, index) => (
              <div key={index} className="flex gap-5">
                <Image
                src={element.image}
                alt={"image of phone"}
                width="70"
                height="70"
                />
                <p className=''>{element.name}</p>
                <p>{element.specifications.Price}</p>
                <button onClick={() => dispatch(remove(element.id))} className="w-[3rem] h-[3rem] border-black border-[2px] rounded-full">X</button>
                {/* <h1>TOTAL PRICE: {totalPrice} $</h1> */}
              </div>
              
            ))}
           </div>
            <div className="w-full h-[3rem] bg-yellow-500 flex justify-center items-center">
              <p>Total Price: {totalPrice} $</p>
           </div>
        </div>
    </div>
  )
}


// const panier = useSelector((state) => state.panier);
// const totalPrice = panier.value.reduce((total, pizza) => total + pizza.price, 0);