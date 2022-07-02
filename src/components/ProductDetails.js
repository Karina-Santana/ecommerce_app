import AllProducts from "./AllProducts"
import Rating from "./Rating"
import Product from "./Product"
import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import allProducts from './AllProducts'


function ProductDetails(props) {
    // const product = allProducts.id === props.match.params.id
    // const product = function showProduct() {

    // }

    const [productId, setProductId] = useState([])

    function getProductId() {
        fetch('/api/products/:id')
            .then(res => res.json())
            .then(res => setProductId(res))
    }

    useEffect(getProductId, [])

    const product = productId

    if (!product) {
        return <div>Product Not Found</div>
    }
    return <div>
        <Link to='/'>Back to Home Page</Link>
        <div>
            <div>
                <img src={product.image} alt={product.title} />
            </div>
            <div>
                <ul>
                    <li>
                        <h1>{product.title}</h1>
                    </li>
                    <li>
                        <Rating rating={product.rating} numReviews={product.numReviews} />
                    </li>
                    <li>Price: ${product.price}</li>
                </ul>
            </div>
            <div>
                <div>
                    <ul>
                        <li>
                            <div>
                                <div>Price</div>
                                <div>${product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div>Status</div>
                                <div>{product.countInStock > 0 ? <span>In Stock</span> : <span>Unavailable</span>}</div>
                            </div>
                        </li>
                        <li>
                            <button>Add to Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}
hahahahha

export default ProductDetails