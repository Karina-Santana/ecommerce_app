
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
// import AddProduct from './components/AddProduct'
import SignUp from './components/SignUp';
import Login from './components/Login';
import isLogged from './components/Login'

function App() {
  if (isLogged === true) {
    return (
      <>
        <div className="grid-container">
          <header className="row">
            <div>
              <a className="brand" href="/">Le Clé</a>
            </div>
            <div>
              <a href="/cart">My Cart</a>
              <Link to="/logout">Log Out</Link>
            </div>
          </header>
          <main>
            <Routes>
              {/* ? is used to not allow to add more product in the cart */}
              <Route path='/cart/:id?' element={<Cart />}></Route>
              <Route path='/products/:id' element={<ProductDetails />}></Route>
              {/* the 'exact' word is making sure that the element Home in the route will run only if the url is '/'  */}
              {/* <Route path='/products/:id' onClick={<ProductDetails handleClick={handleClick} />} exact></Route> */}
              <Route path='/' element={<Home />} exact></Route>
              <Route path="/signup" element={<SignUp />} exact></Route>
              <Route path="login" element={<Login />}></Route>
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
              <a className="brand" href="/">Le Clé</a>
            </div>
            <div>
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Log In</Link>
            </div>
          </header>
          <main>
            <Routes>
              {/* ? is used to not allow to add more product in the cart */}
              <Route path='/cart/:id?' element={<Cart />}></Route>
              <Route path='/products/:id' element={<ProductDetails />}></Route>
              {/* the 'exact' word is making sure that the element Home in the route will run only if the url is '/'  */}
              {/* <Route path='/products/:id' onClick={<ProductDetails handleClick={handleClick} />} exact></Route> */}
              <Route path='/' element={<Home />} exact></Route>
              <Route path="/signup" element={<SignUp />} exact></Route>
              <Route path="login" element={<Login />}></Route>
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


// function App() {

//   return (
//     <div className="grid-container">
//       <header className="row">
//         <div>
//           <a className="brand" href="/">Le Clé</a>
//         </div>
//         <div>
//           <a href="/cart">My Cart</a>
//           <Link to="/signup">Sign Up</Link>
//           <Link to="/login">Log In</Link>
//         </div>
//       </header>
//       <main>
//         <Routes>
//           {/* ? is used to not allow to add more product in the cart */}
//           <Route path='/cart/:id?' element={<Cart />}></Route>
//           <Route path='/products/:id' element={<ProductDetails />}></Route>
//           {/* the 'exact' word is making sure that the element Home in the route will run only if the url is '/'  */}
//           {/* <Route path='/products/:id' onClick={<ProductDetails handleClick={handleClick} />} exact></Route> */}
//           <Route path='/' element={<Home />} exact></Route>
//           <Route path="/signup" element={<SignUp />} exact></Route>
//           <Route path="login" element={<Login />}></Route>
//         </Routes>
//       </main>
//       <footer className="row center">
//         <a href="https://github.com/Karina-Santana">Created by Karina Santana</a>
//       </footer>
//     </div>
//   );
// }

export default App;
