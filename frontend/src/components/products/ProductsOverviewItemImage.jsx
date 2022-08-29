import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ProductsOverviewItemImage = ({ name, id, hasAltImages }) => {
  const [imagePath, setImagePath] = useState('.png');
  return (
    <>
      {hasAltImages ? (
        <NavLink to={`/products/${id}`}>
          <img
            src={require('../../images/products/' + name + imagePath)}
            alt={name}
            style={{
              cursor: 'pointer',
              width: '10rem',
              height: '14rem',
            }}
            onMouseEnter={() => setImagePath('-alt.png')}
            onMouseLeave={() => setImagePath('.png')}
          />
        </NavLink>
      ) : (
        <NavLink to={`/products/${id}`}>
          <img
            src={require('../../images/products/' + name + '.png')}
            alt={name}
            style={{
              cursor: 'pointer',
              width: '10rem',
              height: '14rem',
            }}
          />
        </NavLink>
      )}
    </>
  );
};

export default ProductsOverviewItemImage;
