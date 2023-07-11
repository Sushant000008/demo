import axios from 'axios'
import React,{useState,useEffect} from 'react'

import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetail = () => {
    const[product,setproduct]=useState({})
    const params=useParams()
    const id=params.productId 
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setproduct(res.data))
        .catch(err=>console.log(err))
    },[])
    // handling addto cart function
    const addToCart=()=>{
   // fatching datafrom the localstorage if there is data otherwise ass
      const cartIteams=JSON.parse(localStorage.getItem(`cartIteams`))||[]

      const productIteam={
        id:product.id,
        title:product.title,
        price:product.price,
        category:product.category,
        image:product.image,
        rating:product.rating,
        quantity:1
      }
      // checkif iteam is present in the cart or not
      const existingIteam=cartIteams.find(iteam=>iteam.id===productIteam.id)
      if(existingIteam){
        toast.error(`product is already in the cart`)
      }
      else{
        cartIteams.push(productIteam)
        localStorage.setItem(`cartIteams`,JSON.stringify(cartIteams))
       toast.success(`${productIteam.title} is add to the cart`)
      }
    }
  return (
    <>
    <ToastContainer theam='colored'position='top-center'/>
    <div className="container my-4 ">  
           <div className='row d-flex justify-content-evenly align-iteam-center shadow'>
            <div className='col-md-4'>
            <img src={product.image} alt="" width={`400`} />
            </div>
        <div className="col-md-6">
             
             <h1 className='text-muted'>{product.title}</h1>
       <h2>${product.price}</h2>
        <p>${product.description}</p>
        
        <p>category:{product.category}</p>
       <div className='my-2'>
        <button className='btn btn-warning' onClick={addToCart}>Add to cart</button>
       </div>
       </div>
            </div>

    </div>
    </>
  )
}

export default ProductDetail