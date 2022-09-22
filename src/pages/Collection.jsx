import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { products } from '../products';
import { collections } from '../products';

const Collection = () => {
  const { col } = useParams();
  const colName = collections.find((c) => c.colId === col).colName;
  console.log(colName);
  //   console.log(cat);
  const product = products.filter((p) => p.collection.includes(col));
  //   console.log(product);
  return (
    <>
      <h1 className="display-5 mt-5 pt-4 container">
        <strong>
          {colName.charAt(0).toUpperCase() + colName.substr(1).toLowerCase()}
        </strong>{' '}
        collection
      </h1>
      <div className="container mt-5 pt-4 d-flex flex-wrap justify-content-evenly fullScreen">
        {product.length !== 0 ? (
          product.map((p) => <ProductList product={p} key={p.id} />)
        ) : (
          <h3>There are no products in this collection yet</h3>
        )}
      </div>
    </>
  );
};

export default Collection;
