import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ProductDetail from '../components/products/ProductDetail';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct, reset } from '../features/products/productSlice';
import Spinner from '../components/ui/Spinner';

const Product = () => {
  const { isLoading, product, isError, message } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [isError, message, dispatch]);

  useEffect(() => {
    dispatch(getProduct(params.productId));
  }, [dispatch, params.productId]);

  if (isLoading || !product.name) {
    return <Spinner />;
  }

  return (
    <>
      <ProductDetail />
    </>
  );
};

export default Product;
