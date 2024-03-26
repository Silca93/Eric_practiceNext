
import Image from 'next/image'
import data from './../database/smartphones.json'   

export default function Page({params}) {
  return (
    
    <div className='details w-full flex'>
        <div className="flex left w-1/2 h-[40rem] justify-center">

            <Image
            src={data[params.details].image}
            alt="image of phone"
            width="620"
            height="200"  
            // objectFit='cover'  
            // layout='fill'
            />

        </div>
        <div className="flex flex-col right w-1/2 h-[40rem]   items-center">
            <h1 className="text-2xl">{data[params.details].name}</h1>
            <div className=" flex flex-col gap-5 mt-[5rem]">
                <p className="text-center">SPECIFICATIONS:</p>
                <p className="font-bold">Operating System: {data[params.details].specifications.OS}</p>
                <p className="font-bold"> Display: {data[params.details].specifications.Display}</p>
                <p className="font-bold">Processor:  {data[params.details].specifications.Processor}</p>
                <p className="font-bold">RAM: {data[params.details].specifications.RAM}</p>
                <p className="font-bold"> Storage: {data[params.details].specifications.Storage}</p>
                <p className="font-bold">Camera:  {data[params.details].specifications.Camera}</p>
                <p className="font-bold">Battery: {data[params.details].specifications.Battery}</p>
                <p className="font-bold">Price: {data[params.details].specifications.Price} $</p>
            </div>
        </div>
    </div>
    
  )
}
