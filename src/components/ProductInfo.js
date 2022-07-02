import Rating from './Rating'
import { Routes, Route, Link } from 'react-router-dom'
import handleClick from './ProductDetails'

function ProductById({ price, title, image, rating, numReviews, countInStock }) {
    return (
        <div>
            <Link to='/'>Go Back</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={image} alt={title} />
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{title}</h1>
                        </li>
                        <li>
                            <Rating rating={rating} numReviews={numReviews} />
                        </li>
                        <li>Price: ${price}</li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">${price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>{countInStock > 0 ? <span className="success">In Stock</span> : <span className="error">Unavailable</span>}</div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductById