import { useState, useEffect } from 'react'
import Rating from './Rating'
import useParams from 'react'
import { Routes, Route, Link } from 'react-router-dom'


function ProductDetails(props) {
    // var url = window.location.pathname;
    // var id = url.substring(url.lastIndexOf('/') + 1);

    const productUrl = window.location.href
    // console.log(productUrl)
    const arrProductUrl = productUrl.split('')
    // console.log(arrProductUrl)
    const productId = arrProductUrl[arrProductUrl.length - 1]
    // console.log(productId)

    // const id = product((x) => x.id === props.match.params.id)
    // console.log("VALUE OF PROPS: " + JSON.stringify(id))
    // const [clickedProduct, setClickedProduct] = useState([])
    const [product, setProduct] = useState([])
    const [qty, setQty] = useState(1)

    getProduct(productId)


    function getProduct(productId) {
        fetch(`/api/products/${productId}`)
            .then(res => res.json())
            .then(res => setProduct(res))
    }

    useEffect(getProduct, [])


    // console.log(product)
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
                    <li>
                        <Rating rating={product.rating} numReviews={product.numReviews} />
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
                                <div>{product.countInStock > 0 ? <span className="success">In Stock</span> : <span className="error">Unavailable</span>}</div>
                            </div>
                        </li>
                        {
                            product.countInStock > 0 && (
                                <>
                                    <li>
                                        <div className='row'>
                                            <div>Qtd</div>
                                            <div>
                                                <select
                                                    value={qty}
                                                    onChange={(e) => setQty(e.target.value)}>
                                                    {[...Array(product.countInStock).keys()].map((x) => (
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