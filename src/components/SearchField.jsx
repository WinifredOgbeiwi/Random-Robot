import React, {useContext} from 'react'
import RobotContext from '../context/RobotContext'

function SearchField() {
  const {onSearchChange} = useContext(RobotContext)
  return (
    <>
        <input className='pa2 center bg-lightest-blue b--light-blue br2' 
          type="text"  
           placeholder='search robot here'
          onChange={onSearchChange}
         />
    </>
  )
}

export default SearchField
