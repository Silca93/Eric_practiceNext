'use client'
import React from 'react'
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Page({params}) {
  // const response = await fetch('https://dummyjson.com/posts');
  // const data = await response.json();
  const [data, setData] = useState([]);

  useEffect(() => {
     fetch('https://dummyjson.com/posts')
       .then(response => response.json())
       .then(data => setData(data.posts));
  }, []);

  return (
    <div className="w-full flex justify-center">
      
      <div>Post n#:

      {data.map((post, index) => (
        <p key={index}>
          <Link href={`/posts/${index}`}>
            {post.title} 
          </Link>
        </p>
      ))}
      <div className="w-[20rem] h-[10rem] bg-slate-300 text-center px-3 rounded-lg my-4">
        <p>Highlighted title : </p>

      {data && data[params.id] && <p className="text-3xl">{data[params.id].title}</p>}
      </div>
      {/* <p className="text-3xl"> {data && data[params.id].title}  </p>
      */}
      </div>
    </div>
  )
}
