import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/products/ProductDetail';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct, reset } from '../features/products/productSlice';

const Product = () => {
  const { isSuccess } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getProduct(params.productId));

    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, params.productId, isSuccess]);

  return (
    <>
      <ProductDetail />
    </>
  );
};

export default Product;
