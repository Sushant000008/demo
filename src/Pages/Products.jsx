import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Cards from '../Companent/Cards'


const Products = () => {
    const [products,setproducts]=useState([])
    const[limit,setLimit]=useState(12)
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
             {products.slice(0,limit).map((product,i)=>(
                <Cards iteam={product} key={i} />
             ))}
             <div className='mx-auto'>
                <div className="col-3">
                    {limit < products.length &&
                                        <button className='btn btn-warning ' onClick={()=>setLimit(limit+4)}>Load More</button>

                    }
                </div>
             </div>
        </div>
                 
    </div>
    
    </>
  )
}

export default Products