import React from 'react'
function Card({item}) {
  return (
    <div className='tc bg-washed-red fl w-third pa4 shadow-2 center '>
        <img src={`https://robohash.org/${item.username}?200x200`} alt="random robot character" />
        <h2>{item.name}</h2>
        <p>{item.email}</p>
    </div>
  )
}

export default Card
