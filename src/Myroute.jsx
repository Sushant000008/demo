import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayOut from './Companent/LayOut'
import HomePage from './Pages/HomePage'
import LoginIn from './Pages/LoginIn'
import DataFatch from './hooks/DataFatch'
import Products from './Pages/Products'
import ProductDetail from './Pages/ProductDetail'
import Carts from './Pages/Carts'
import Register from './Pages/Register'
import Show from './context/Show'
import TestNav from './redux/TestNav'

const Myroute = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LayOut />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginIn />} />
          <Route path='products' element={<Products/>}/>
                 <Route path='productdetails/:productId' element={<ProductDetail/>}/>
                 <Route path='cart' element={<Carts/>}/>
                 <Route path='register' element={<Register/>}/>
        </Route>

        <Route path='/hooks/data' element={<DataFatch />} />
        <Route path='context/show' element={<Show/>}/>
        <Route path='redux/cart' element={<TestNav/>}/>







      </Routes>
    </Router>
  )
}

export default Myroute