import { useEffect } from 'react';
import ProductsOverview from '../components/products/ProductsOverview';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, reset } from '../features/products/productSlice';
import { toast } from 'react-toastify';

const Home = () => {
  const { isError, message } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());

    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [dispatch, isError, message]);

  return (
    <>
      <ProductsOverview />
    </>
  );
};

export default Home;
