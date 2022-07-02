// import { useState, useEffect } from 'react'
// import { Routes, Route, Link } from 'react-router-dom'
// import Product from './Product'


// function AddProduct() {
//     const [title, setTitle] = useState('')
//     const [image, setImage] = useState('')
//     const [price, setPrice] = useState('')
//     const [description, setDescription] = useState('')

//     const handleChange = (event) => {
//         const elementClass = event.target.className
//         if (elementClass === 'title') {
//             setTitle(event.target.value)
//         } else if (elementClass === event.target.className) {
//             if (elementClass === 'image') {
//                 setImage(event.target.value)
//             }
//         } else if (elementClass === event.target.className) {
//             if (elementClass === 'price') {
//                 setPrice(event.target.value)
//             }
//         } else if (elementClass === event.target.className) {
//             if (elementClass === 'description') {
//                 setDescription(event.target.value)
//             }
//         }
//     }

//     const handleClick = (event) => {
//         fetch('/api/products', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ title: title, image: image, price: price, description: description })
//         })
//     }

//     return (
//         <div className="Product">
//             <h2>Add products:</h2>

//             <div>
//                 <form action="">
//                     <label htmlFor="">Title: </label>
//                     <input className='title' onChange={handleChange} type="text" />

//                     <label htmlFor="">Image URL: </label>
//                     <input className='image' onChange={handleChange} type="text" />

//                     <label htmlFor="">Price: </label>
//                     <input onChange={handleChange} type="text" />

//                     <label htmlFor="">Description: </label>
//                     <input onChange={handleChange} type="text" />

//                     <label htmlFor="">Stock: </label>
//                     <input onChange={handleChange} type="text" />
//                 </form>
//                 <Link to='/products' onClick={handleClick} className="add-product-btn">Save</Link>
//             </div>
//         </div>
//     )
// }

// export default AddProduct