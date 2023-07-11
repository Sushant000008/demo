import React from 'react'
import {useSelector} from 'react-redux'
import ChangeCart from './reducer/ChangeCart'
import Student from './reducer/Student'

const TestNav = () => {
  const data =useSelector(store=>store)

  return (
    <>
    <div className='text-center text-primary h2'>
        The total number of iteam in the cart is {data.cartCount}
    </div>
    <ChangeCart/>
    <Student/>
    </>
  )
}

export default TestNav