import { useState, useEffect } from 'react'
import ProductById from './ProductInfo'
import Rating from './Rating'
import useParams from 'react'


import { Routes, Route, Link } from 'react-router-dom'


function ProductDetails() {

    // const id = this.props.match.params.id;

    // console.log("VALUE OF PROPS: " + JSON.stringify(query.id))
    // const [clickedProduct, setClickedProduct] = useState([])
    const [product, setProduct] = useState([])
    console.log(product)

    function getProduct() {
        fetch(`/api/products/`)
            .then(res => res.json())
            .then(res => setProduct(res))
    }

    useEffect(getProduct, [])


    // const handleClick = event => {
    //     let productId = event.target.id
    //     console.log(productId)
    // };
    // const navigate = useNavigate()
    // function handleClick(event) {
    //     event.preventDefault();
    //     const productArray = event.target.id.split('-')
    //     console.log(event.target)
    //     const productObj = {
    //         id: productArray[0],
    //         title: productArray[1],
    //         image: productArray[2],
    //         rating: productArray[3],
    //         numReviews: productArray[4],
    //         price: productArray[5],
    //         countInStock: productArray[6],
    //         category: productArray[7]
    //     }
    //     setClickedProduct(productObj)
    //     navigate('/product-info')
    // }



    return (
        <div>
            {
                product.map((row, index) => (
                    <ProductById
                        key={index}
                        title={row.title}
                        price={row.price}
                        image={row.image}
                        rating={row.rating}
                        numReviews={row.numReviews}
                        countInStock={row.countInStock}
                    />
                ))
            }
        </div>


        // <ProductById
        //     product={product}
        // // handleClick={handleClick}
        // />
    );



    // console.log("PRODUCT: " + product)
    //console.log(products[0].id)
    // const info = ''
    // for (let i = 0; i < products.length; i++) {
    //     if (products[i].id === props.id) {
    //         info = `Title: ${products[i].title}, Price: ${products[i].price}`
    //         console.log(info)
    //     }
    // }
    // return (
    //     <ProductById
    //         props={props}
    //     />
    // )

    // if (!product) {
    //     return <div>Product Not Found</div>
    // }
    // return <div>
    //     <Link to='/'>Back to Home Page</Link>
    //     <div className="row top">
    //         <div className="col-2">
    //             <img className="large" src={product.image} alt={product.title} />
    //         </div>
    //         <div className="col-1">
    //             <ul>
    //                 <li>
    //                     <h1>{product.title}</h1>
    //                 </li>
    //                 <li>
    //                     <Rating rating={product.rating} numReviews={product.numReviews} />
    //                 </li>
    //                 <li>Price: ${product.price}</li>
    //             </ul>
    //         </div>
    //         <div className="col-1">
    //             <div className="card card-body">
    //                 <ul>
    //                     <li>
    //                         <div className="row">
    //                             <div>Price</div>
    //                             <div className="price">${product.price}</div>
    //                         </div>
    //                     </li>
    //                     <li>
    //                         <div className="row">
    //                             <div>Status</div>
    //                             <div>{product.countInStock > 0 ? <span className="success">In Stock</span> : <span className="error">Unavailable</span>}</div>
    //                         </div>
    //                     </li>
    //                     <li>
    //                         <button className="primary block">Add to Cart</button>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // }
}
export default ProductDetails