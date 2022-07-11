import { useEffect } from 'react';
import ProductsOverview from '../components/products/ProductsOverview';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, reset } from '../features/products/productSlice';
import Spinner from '../components/ui/Spinner';

const Home = () => {
  const { isSuccess, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <ProductsOverview />
    </>
  );
};

export default Home;
