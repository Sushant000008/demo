import React from 'react'
import { Link } from 'react-router-dom'

const Cards = (props) => {
  const {title,price,image,id}=props.iteam
  return (
    <>
    
  <div className="col">
    <div className="card">
      <img src={image} className="card-img-top" alt={
        title}/>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,20)}...</h5>
        <h5>${price}</h5>
        <Link to={`/productdetails/${id}`} className='btn btn-warning'>See More</Link>
      </div>
    </div>
  </div>   
 
</>
  )
}

export default Cards