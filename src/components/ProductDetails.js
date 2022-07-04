import { useState, useEffect } from 'react'
import Rating from './Rating'
import { Routes, Route, Link, useParams } from 'react-router-dom'


function ProductDetails(props) {

    const { id: productId } = useParams()


    const [product, setProduct] = useState([])
    const [qty, setQty] = useState(1)


    function getProduct(productId) {
        fetch(`/api/products/${productId}`)
            .then(res => res.json())
            .then(res => setProduct(res))
    }

    useEffect(() => getProduct(productId), [])

    if (!product) {
        return <div>Product Not Found</div>
    }
    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }
    return <div>
        <Link to='/'>Go Back</Link>
        <div className="row top">
            <div className="col-2">
                <img className="large" src={product.image} alt={product.title} />
            </div>
            <div className="col-1">
                <ul>
                    <li>
                        <h1>{product.title}</h1>
                    </li>
                    <li>Description: {product.description}</li>
                    <li>
                        <Rating rating={product.rating} num_reviews={product.num_reviews} />
                    </li>
                    <li>Price: ${product.price}</li>
                </ul>
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div>Price</div>
                                <div className="price">${product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Status</div>
                                <div>{product.count_in_stock > 0 ? <span className="success">In Stock</span> : <span className="error">Unavailable</span>}</div>
                            </div>
                        </li>
                        {
                            product.count_in_stock > 0 && (
                                <>
                                    <li>
                                        <div className='row'>
                                            <div>Qtd</div>
                                            <div>
                                                <select
                                                    value={qty}
                                                    onChange={(e) => setQty(e.target.value)}>
                                                    {[...Array(product.count_in_stock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button onClick={addToCartHandler} className="primary block">Add to Cart</button>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
}

export default ProductDetails