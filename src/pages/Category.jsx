import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { products } from '../products';

const Category = () => {
  const { cat } = useParams();
  //   console.log(cat);
  const product = products.filter((p) => p.category === cat);
  // console.log(product.length);
  //   console.log(product);
  return (
    <>
      <h1 className="display-5 mt-5 pt-4 container">
        <strong>
          {cat.charAt(0).toUpperCase() + cat.substr(1).toLowerCase()}
        </strong>{' '}
        category
      </h1>
      <div className="container mt-5 pt-4 d-flex flex-wrap justify-content-evenly fullScreen">
        {product.length !== 0 ? (
          product.map((p) => <ProductList product={p} key={p.id} />)
        ) : (
          <h3>There are no products in this category yet</h3>
        )}
      </div>
    </>
  );
};

export default Category;
