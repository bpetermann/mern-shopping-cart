import { useEffect } from 'react';
import ProductsOverview from '../components/products/ProductsOverview';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, reset } from '../features/products/productSlice';

const Home = () => {
  const { isSuccess } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());

    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  return (
    <>
      <ProductsOverview />
    </>
  );
};

export default Home;
