
import React,{useState,useEffect} from 'react'
import axios from 'axios'


const DataFatch = () => {
    const[products,setproduct]=useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then(res=>{
            console.log(res.data)
            setproduct(res.data)
        })
        .catch(err=>console.log(err))

    },[])
  return (
    <>
 {products.map((product,i)=>(
    <div key={i}>
        <h1>{product.title}</h1>
        <h3>${product.price}</h3>

    </div>
 ))}
    </>
  )
}

export default DataFatch