
// import { useState, useEffect } from 'react'

// function AddToCart() {
//     const [product_id, setProduct_id] = useState("")
//     const [title, setTitle] = useState("")
//     const [image, setImage] = useState("")
//     const [price, setPrice] = useState(0)
//     const [qty, setQty] = useState(0)

//     const data = { product_id, title, image, price, qty }

//     fetch(`/api/products/${data.productId}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//     })
//         .then(res => res.json())
//         .then(console.log)
// }

// function RemoveFromCart() {

// }

// export default { AddToCart, RemoveFromCart }