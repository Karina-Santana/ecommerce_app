import { Link } from 'react-router-dom'
import Rating from './Rating'

function AllProducts({ allProducts }) {

    return (
        <>
            {
                allProducts.map((product, index) => (
                    <div className="row center" key={index}>
                        <div className="card">
                            <Link to={`products/${product.id}`}>
                                <img className="medium" src={product.image} alt={product.title} />
                            </Link>
                            <div className="card-body">
                                <Link to={`products/${product.id}`}>
                                    <h2>{product.title}</h2>
                                </Link>
                                <Rating rating={product.rating} num_reviews={product.num_reviews} />
                                <div className="price">${product.price}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}



export default AllProducts