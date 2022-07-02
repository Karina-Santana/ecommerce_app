import { useState, useEffect } from 'react'
import './Product.css'
import AllProducts from './AllProducts'

function Product() {
    const [allProducts, setAllProducts] = useState([])

    function getAllProducts() {
        fetch('/api/products')
            .then(res => res.json())
            .then(res => setAllProducts(res))
    }

    useEffect(getAllProducts, [])

    return (
        <AllProducts
            allProducts={allProducts}
        />

    )
}

export default Product