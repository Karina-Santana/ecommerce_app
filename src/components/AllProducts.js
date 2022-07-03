import Rating from './Rating'

function AllProducts({ allProducts }) {
    return (
        <>
            {
                allProducts.map((product, index) => (
                    <div className="row center" key={index}>
                        <div className="card">
                            <a href={`products/${product.id}`}>
                                <img className="medium" src={product.image} alt={product.title} />
                            </a>
                            <div className="card-body">
                                <a href={`products/${product.id}`}>
                                    <h2>{product.title}</h2>
                                </a>
                                <Rating rating={product.rating} numReviews={product.numReviews} />
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