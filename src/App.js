
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
// import AddProduct from './components/AddProduct'

import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">Le Clé</a>
        </div>
        <div>
          <a href="/cart">My Cart</a>
          <a href="/signin">Sign in</a>
        </div>
      </header>
      <main>
        <Routes>
          <Route path='/product/:id' element={<ProductDetails />} exact></Route>
          {/* the 'exact' word is making sure that the element Home in the route will run only if the url is '/'  */}
          <Route path='/' element={<Home />} exact></Route>
        </Routes>
      </main>
      <footer className="row center">
        <a href="https://github.com/Karina-Santana">Created by Karina Santana</a>
      </footer>
    </div>
  );
}

export default App;
