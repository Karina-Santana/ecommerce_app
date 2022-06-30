
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import AddProduct from './components/AddProduct'
import Product from './components/Product'
import PasswordChecker from './components/PasswordChecker'
import carousel_1 from './images/carousel_1.jpg'
import carousel_2 from './images/carousel_2.jpg'
import carousel_3 from './images/carousel_3.jpg'
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  return (
    <div>
      <header>
        <div header-logo-btn>
          <h1 className='logo'>Le Clé</h1>
          <Link to='/sign-up' className="signup-btn">Sign up</Link>
          <Link to='/login' className="login-btn">Log in</Link>
        </div>

        <Routes>
          {/* < Route path='/' element={<Home name={'Karina'} />}></Route> */}
          <Route path='/sign-up' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </header>

      <div className="categories">
        <Link to='/products' className="products-btn">Products</Link>
        <Routes>
          <Route path='/products' element={<Product />}></Route>
        </Routes>

        <Link to='/add-products' className="add-products-btn">Add Products</Link>
        <Routes>
          <Route path='/add-products' element={<AddProduct />}></Route>
        </Routes>
      </div>

      <div id="carouselExampleCaptions" class="carousel-slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={carousel_1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Winter Collection</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={carousel_2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Looking forward to spring?</h5>
              <p>Check out our Spring Collection!</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={carousel_3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Sales!</h5>
              <p>Up to 50% off!</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <footer>
        <button class="about-us">About us</button>
        <button class="contact">Contact</button>
        <button class="delivery">Delivery Options</button>
      </footer>
    </div>
  );
}

export default App;
