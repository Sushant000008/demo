import React,{useState} from 'react'
import {  useSelector,useDispatch } from 'react-redux'


const Student = () => {
    const dispatch=useDispatch()

    const name =useSelector(Store=>Store.student)
    const[stdname,setName]=useState('')
    const submit=()=>(
        dispatch({type:'change_name',payload:stdname})
    )
  return (
    <>
    <p className="h1 justify-context-center">
        the name of the student is {name.StudentName}
    </p>
    <div className='offset-md-3 col-md-4 my-3'>
        <input type="text" name='std' id='std' className='form-control' onChange={(e)=>setName(e.target.value)} />
        <input type="submit" value='send' className='btn btn-primary' onClick={submit} />
    </div>
    </>
  )
}

export default Student