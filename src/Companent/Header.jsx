import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item"><Link to="#" className="nav-link active" aria-current="page">Home</Link></li>
        <li className="nav-item"><Link to="/products" className="nav-link">Product</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link">Pricing</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link">FAQs</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link">About</Link></li>
      </ul>
    </header>
        </>
    )
}

export default Header