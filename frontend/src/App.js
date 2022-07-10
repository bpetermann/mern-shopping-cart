import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Searchbar from './components/layout/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Product from './pages/Product';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Searchbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/products/:productId' element={<Product />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
