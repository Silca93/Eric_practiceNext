import React from 'react'

export default function loading() {
  return (
    <div className="w-screen h-[5rem]  flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
      <div className="flex flex-col gap-4 w-52">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
    </div>
  )
}
