import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cart from './components/modal/cart/Cart';
import Wishlist from './components/modal/wishlist/Wishlist';
import Popup from './components/modal/popup/Popup';
import Navbar from './components/layout/Navbar';
import Searchbar from './components/layout/Searchbar';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Product from './pages/Product';
import PageNotFound from './pages/404';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Categories from './components/layout/Categories';

const App = () => {
  const { showShoppingCart } = useSelector((state) => state.cart);
  const { showWishlist } = useSelector((state) => state.wishlist);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setShowPopup(true);
    }, 5000);
    //eslint-disable-next-line
  }, []);

  const closePopupHandler = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Router>
        {showShoppingCart && <Cart />}
        {showWishlist && <Wishlist />}
        {showPopup && <Popup closePopup={closePopupHandler} />}
        <Navbar />
        <Searchbar />
        <Categories />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/products/:productId' element={<Product />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
