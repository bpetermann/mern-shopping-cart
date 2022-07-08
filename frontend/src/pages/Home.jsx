import ProductsOverview from '../components/products/ProductsOverview';

const DUMMY_PRODUCTS = [
  {
    name: 'Sandals',
    id: 'i1',
    description: 'Maroon sandals',
    price: 24.99,
    amount: 1,
  },
  {
    name: 'Brogues',
    id: 'i2',
    description: 'Mint green lace up brogues',
    price: 85.99,
    amount: 1,
  },
  {
    name: 'Sneakers',
    id: 'i3',
    description: 'Multi-coloured Sneakers',
    price: 69.99,
    amount: 1,
  },
];

const Home = () => {
  return (
    <>
      <ProductsOverview products={DUMMY_PRODUCTS} />
    </>
  );
};

export default Home;
