import React from 'react'
import{ useDispatch }from 'react-redux'

const ChangeCart = () => {
    const dispatch=useDispatch()

    const incerase=()=>{
        dispatch({type:'ADD_TO_CART'})
    }
  return (
   <>
   <div className="container-fluid">
   <div className="row-d-flex justify-context-center">
    <div className='col-md-4'>
        <button className='btn btn-primary' onClick={incerase}>Add</button>
    </div>
    <div className='col-md-4'>
        <button className='btn btn-danger'>Remove</button>
    </div>
   </div>
   </div>
   </>
  )
}

export default ChangeCart