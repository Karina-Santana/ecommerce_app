import carousel_1 from '../images/carousel_1.jpg'
import carousel_2 from '../images/carousel_2.jpg'
import carousel_3 from '../images/carousel_3.jpg'
import SignUp from './SignUp';
import { Routes, Route, Link } from 'react-router-dom'
import Login from './Login';
import Product from './AddProduct';

function Home({ name }) {
    return (
        <div>
            <h1>Welcome {name}!</h1>
        </div>
    )
}

export default Home