  'use client'
  import { useState } from "react";
  import { useRef } from "react";
  //redux//
  import { useDispatch, useSelector } from "react-redux";
  import { increment, decrement, incrementByAmount } from "./GlobalRedux/Features/counter/counterSlice";


  import { addToCart, remove } from "./GlobalRedux/Features/shopping/shoppingSlice";

 //json//
  import data from './database/smartphones.json';

  export default function Home() {
    
  const dispatch = useDispatch();
  const calculate = useSelector((state) => state.task.value);
  const basket = useSelector((state) => state.cart.value);

  const [searchVal, setSearchVal] = useState("");
    
  const [filteredPhones, setFilteredPhones] = useState(data);

  const filterBySearch = () => {
    const filteredBySearch = data.filter((phone) =>
      phone.name.toLowerCase().includes(searchVal.toLowerCase())
    );
    setFilteredPhones(filteredBySearch);
  };


  const inputValue = useRef(null)


    return (
      <main className="flex w-dvw flex-col items-center gap-5">
        
        <div className="w-full h-[5rem] flex gap-5 ">
          <div className="dropdown dropdown-right mx-5">
            <div tabIndex={0} role="button" className="btn m-1">Categories</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Phones</a></li>
              <li><a>Laptops</a></li>
            </ul>
          </div>
          <div>
            <input onChange={(e) => {setSearchVal(e.target.value), filterBySearch()}} className="w-[15rem] h-[3rem] rounded-md mt-1" type="text" placeholder="Search by..." />
          </div>
        </div>
        <div className="incrementor w-[19rem] h-[9rem] bg-gray-100 rounded-xl">
          <h1 className="text-center">The incrementor:</h1>
          <div className="flex items-center justify-center gap-3 -center w-[8rem] h-[5rem] ml-[5rem]">
            <button className="w-[2.5rem] rounded-xl border-black border-[1px] bg-black text-white" onClick={() => {dispatch(increment(), console.log({calculate}))}}>+</button>
            <p className="text-xl">{calculate}</p>
            <button className="w-[2.5rem] rounded-xl border-black border-[1px] bg-black text-white" onClick={()=> dispatch(decrement())}>-</button>
          </div>
          <div className="w-full flex justify-center items-center gap-3">
            <input className="w-[3rem]" ref={inputValue} type="number" name="" id="" />
            <button className="w-[3.5rem] rounded-xl border-black border-[1px] bg-black text-white" onClick={() => dispatch(incrementByAmount(parseInt(inputValue.current.value)))}>+ </button>
          </div>
        </div>
        <div className="w-full  flex gap-5 flex-wrap justify-center items-center">

          {filteredPhones.length > 0 &&
          filteredPhones.map((element, index) => (

            <div key={index} id="" className="CARD card w-[330px] h-[600px] bg-white-500 mx-2 mt-5">
              <div className="top w-full h-[10%] bg-[#403D39] flex justify-end items-center rounded-t-lg pr-5">
                <span className='text-white text-[2rem] mr-5'></span>
              </div>  
              
              <div className="mid w-full h-[40%] max-[500px]:h-[40%] bg-white flex justify-center ">
                <img src={element.image} alt="" srcset="" />
              </div>
              <div className="bot w-full h-[45%]  bg-[#403D39] rounded-b-lg">
                <div className="itemInfo w-full h-full flex flex-col justify-start px-4 gap-3">
                  <h1 className="text-[25px] text-white font-[500] pt-1 ">{element.name}</h1>
                  <button onClick={() =>{dispatch(addToCart(element)), console.log(basket);}} className="text-white border-[1px] flex items-center justify-center py-3 px-3 border-white w-[8rem] h-[2rem] bg-black rounded-lg hover:bg-white hover:text-black hover:border-black duration-150">ADD to cart</button>
                  <h1 className="text-[15px] text-white"></h1>
                  <div className="rating flex-row justify-between items-center">
                    <h1 className="text-[15px] text-white pb-3">{element.specifications.Price}</h1>
                    <p className="text-white flex items-center gap-2 text-[10px]"> <img className="pb-2"  alt="" width="20px" height="10px"/>{element.description} </p>
                </div>
                </div>
              </div>
            </div>
            )) 
            }
        </div>
      </main>
    );
  }
