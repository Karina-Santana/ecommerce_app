import { useState, useEffect } from 'react'
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
// import AddProduct from './components/AddProduct'
import SignUp from './components/SignUp';
import Login from './components/Login';
import LogOut from './components/LogOut';

function App() {

  const [isLogged, setIsLogged] = useState(false)

  if (isLogged === true) {
    return (
      <>
        <div className="grid-container">
          <header className="row">
            <div>
              <Link className="brand" to="/">Le Clé</Link>
            </div>
            <div>
              <Link to='/cart'>My Cart</Link>
              <Link to='/logout'>Log Out</Link>
            </div>
          </header>
          <main>
            <Routes>
              <Route path='/cart/*' element={<Cart />}></Route>
              <Route path='/products/:id/*' element={<ProductDetails />}></Route>
              <Route path='/' element={<Home />}></Route>
              <Route path="logout" element={<LogOut setIsLogged={setIsLogged} />}></Route>
            </Routes>
          </main>
          <footer className="row center">
            <a href="https://github.com/Karina-Santana">Created by Karina Santana</a>
          </footer>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="grid-container">
          <header className="row">
            <div>
              <Link className="brand" to="/">Le Clé</Link>
            </div>
            <div>
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Log In</Link>
            </div>
          </header>
          <main>
            <Routes>
              {/* ? is used to not allow to add more product in the cart */}
              <Route path='/cart/:id/*' element={<Cart />}></Route>
              <Route path='/products/:id/*' element={<ProductDetails />}></Route>
              {/* the 'exact' word is making sure that the element Home in the route will run only if the url is '/'  */}
              {/* <Route path='/products/:id' onClick={<ProductDetails handleClick={handleClick} />} exact></Route> */}
              <Route path='/' element={<Home />} exact></Route>
              <Route path="/signup" element={<SignUp />} exact></Route>
              <Route path="login" element={<Login setIsLogged={setIsLogged} />}></Route>
            </Routes>
          </main>
          <footer className="row center">
            <a href="https://github.com/Karina-Santana">Created by Karina Santana</a>
          </footer>
        </div>
      </>
    )
  }

}


export default App;
