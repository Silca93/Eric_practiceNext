import React from 'react'

export default async function page({params}) {
  const response = await fetch('https://dummyjson.com/posts');
  const data = await response.json();
  return (
    <div className="w-full flex justify-center">
      
      <div>Posts:

      {data.posts.map((post, index) => (
        <p key={index}>
          {post.title} 
        </p>
      ))}
      <p className="text-3xl"> {data && data.posts[params.id].title}  </p>
     
      </div>
    </div>
  )
}
