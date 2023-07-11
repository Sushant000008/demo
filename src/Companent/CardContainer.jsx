import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Cards from './Cards'

const CardContainer = () => {
    const [products,setproducts]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response =await axios.get(`https://fakestoreapi.com/products`)
                setproducts (response.data)
            }
            catch(err){
                console.log(err)
            }
        }
         fetchData()
    },[])
  return (
    <>
    <div className="container-fluid bg-dark my-3">
        <div className="row row-cols-1 row-cols-md-4 g-4">
             {products.slice(0,8).map((product,i)=>(
                <Cards iteam={product} key={i} />
             ))}
        </div>

    </div>
    </>
  )
}

export default CardContainer