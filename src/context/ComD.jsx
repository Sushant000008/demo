import React,{useContext} from 'react'
import { GlobalContext } from './GlobalContext'
const ComD = () => {
    const js=useContext(GlobalContext)
  return (
    <>
    <h2 className='text-center text-mute'>
       The name of the student is {js.name}
    </h2>
    <h2 className='text-center text-primary'>
        The age of the student is {js.age}
    </h2>
    <h2 className='text-center text-danger'>
        The age of the student is {js.address}
    </h2>
    </>
  )
}

export default ComD