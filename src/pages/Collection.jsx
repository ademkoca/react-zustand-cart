import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { products } from '../products';

const Category = () => {
  const { col } = useParams();
  //   console.log(cat);
  const product = products.filter((p) => p.collection.includes(col));
  //   console.log(product);
  return (
    <>
      <h1 className="display-5 mt-5 pt-4 container">
        <strong>
          {col.charAt(0).toUpperCase() + col.substr(1).toLowerCase()}
        </strong>{' '}
        collection
      </h1>
      <div className="container mt-5 pt-4 d-flex flex-wrap justify-content-evenly">
        {product.map((p) => (
          <ProductList product={p} key={p.id} />
        ))}
      </div>
    </>
  );
};

export default Category;
