import { useParams } from 'react-router-dom';

const Product = () => {
  const params = useParams();

  return <div>{params.productId}</div>;
};

export default Product;
