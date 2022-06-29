
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Product from './components/Product'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/products'>Product</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
