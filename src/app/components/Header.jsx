'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';

export default function Header() {

  const basketItems = useSelector((state) => state.cart.value.length)  

  return (
    <div className="nav flex w-full h-[5rem]  justify-end">
        <nav className="w-full h-full justify-between bg-slate-400 flex items-center">
            <div className="w-[50%] h-full flex justify-start items-center px-5 ">
                <Image
                    src="https://static.canva.com/web/images/bc71c45e4c5bede024fc2004eecfd280.png"
                    alt="image of paypal logo"
                    width="100"
                    height="100"
                />
                
            </div>
            <h1 className="text-xl">NESTEK</h1>
            <div className="w-[50%] flex justify-end px-5">

                <ul className="flex gap-5 justify-center items-center">
                    <li>
                        <Link href="/">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/1">
                        Posts
                        </Link>
                    </li>
                    <li className="">
                    <Link href="/basket/">
                       <div className="flex gap-2">
                        <FaCartShopping/>
                        <span>{basketItems}</span>
                       </div> 
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
      
    </div>
  )
}
