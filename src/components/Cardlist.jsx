import React, { useContext } from 'react'
import RobotContext from '../context/RobotContext'
import Card from './Card'

function Cardlist() {
  const {robots} = useContext(RobotContext)
  return (
    <>
       
        {
          (robots.length>0)?robots.map((item) => (
            <Card key={item.id} 
            item={item} />
          )):<h1 className="f2 tc white">No Items matched</h1>
        }
      
    </>
  )
}

export default Cardlist
