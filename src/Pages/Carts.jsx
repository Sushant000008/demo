import React, { Fragment, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrash } from 'react-icons/fa';
const Carts = () => {

    const[items,setItems]=useState([])
    useEffect(()=>{
        const cartData=JSON.parse(localStorage.getItem(`cartItems`))
        setItems(cartData)
    },[])
    // handling incerease quantity
    const increaseQty=id=>{
        const updateItems=items.map(item=>{
            if(item.id===id && item.quantity<5){
                return{...item,quantity:item.quantity+1}
            }
            return item
        })
        setItems(updateItems)
        localStorage.setItem('cartItems',JSON.stringify(updateItems))
    }
    // handaling decrease quantity
    const decreaseQty=id=>{
        const updateItems=items.map(item=>{
            if(item.id===id && item.quantity>1){
                return{...item,quantity:item.quantity-1}
            }
            return item
        })
        setItems(updateItems)
        localStorage.setItem('cartItems',JSON.stringify(updateItems))
    }
    // remove item from the cart
    const removeCartHandler=id=>{ 
        const confirmed=window.confirm('Are you sure want to remove this producet from the cart?')
        if(confirmed){
            const filtercart=items.filter(item=>item.id==id)
            localStorage.setItem(`cartItem`.JSON.stringify(filtercart))
            setItems(filtercart)
            toast.success(`item is removed from the cart `)
        }
    }
  return (
    <>
    <ToastContainer theme='colored' position='top-center'/>
    <div className='container'>
        <div className='row d-flex justify-content-between my-4' >
            {items && items.length===0 ?
           <h2 className='text-center text-danger'>
            your cart is empty
           </h2>
           
           
            
        :(
         <Fragment>
            <h2 className='text-center'>
                Your cart items
            </h2>
            <div className='col-md-8 shadow'>
                {items.map((items,i)=>(
                    <Fragment key={i}>
                    <hr />
                    <div className='row d-flex align-items-center'>
                        <div className="col-2">
                            <img src={items.image} alt={items.title} width='50' />
                        </div>
                        <div className="col-3">
                            <strong>{items.title}</strong>
                        </div>
                        <div className="col-2 text-warning" >
                            ${items.price}
                        </div>
                        <div className="col-3">
                            <div className="d-flex align-items-center" >
                                <button className='btn btn-danger' onClick={()=>decreaseQty(items.id)}
                                >
                                    
                                    <strong>-</strong></button>
                                  &nbsp;
                                  <strong>{items.quantity}</strong>
                                  &nbsp;
                                  <button className='btn btn-primary
                                  ' onClick={()=>increaseQty(items.id)}>+</button>
                            </div>
                        </div>
                        <div className="col-1">
                            <button className='btn btn-danger' onClick={()=>removeCartHandler(item.id)}
                            
                            ><FaTrash/></button>
                        </div>
                    </div>

                    </Fragment>
                ))}
            </div>
            <div className="col-md-3">
                <div className="shadow p-2">
                    <h5>Cart summary</h5>
                    <hr />
                    <p><strong>Units:{items.reduce((a,b)=>a+number(b,quantity),0)}</strong>1(units)</p>
                    <p><strong>Total:</strong>${items.reduce((ac,item)=>ac+(items.quantity*item.price),0)}</p>
                    <hr />
                    <button className='btn btn-warning'>Checkout</button>
                </div>
            </div>
         </Fragment>
           
        )
        }
        </div>
    </div>
    </>
  )
}

export default Carts