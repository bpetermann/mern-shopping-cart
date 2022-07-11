import { useParams } from 'react-router-dom';

const Product = () => {
  const params = useParams();

  return <>{params.productId}</>;
};

export default Product;
