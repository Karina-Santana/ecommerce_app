import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Product from './Product'


function AddProduct() {
    const [eachProducts, setEachProducts] = useState({ title: '' })

    const handleChange = (event) => {
        event.target.value

    }
    const addProduct = (product) => {
        console.log(product)

    }

    return (
        <div className="Product">
            <h2>Add products:</h2>

            <div onChange={addProduct}>
                <form action="">
                    <label htmlFor="">Title: </label>
                    <input onChange={handleChange} type="text" />
                </form>
                <form action="">
                    <label htmlFor="">Image URL: </label>
                    <input onChange={handleChange} type="text" />
                </form>
                <form action="">
                    <label htmlFor="">Price: </label>
                    <input onChange={handleChange} type="text" />
                </form>
                <form action="">
                    <label htmlFor="">Description: </label>
                    <input onChange={handleChange} type="text" />
                </form>
                <form action="">
                    <label htmlFor="">Stock: </label>
                    <input onChange={handleChange} type="text" />
                </form>
                <Link to='/products' className="add-product-btn">Save</Link>
                <Routes>
                    <Route path='/products' element={<Product />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default AddProduct