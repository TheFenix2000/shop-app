import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Product from './components/Product/Product';
import Products from './components/Products.jsx/Products';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route index exact element={<Home />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/cart' exact element={<Cart />} />
          <Route path='/products/:productId' exact element={<Product />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
