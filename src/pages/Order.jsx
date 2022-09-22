import React from 'react';
import { Link } from 'react-router-dom';
import { useItemseStore } from '../store';

const Order = () => {
  return (
    <main>
      <div className="py-5 text-center fullScreen">
        <i
          className="bi bi-check-circle-fill text-success "
          style={{ fontSize: '3rem' }}
        ></i>
        <h2>Thank you for your order!</h2>
        <p className="lead">
          Your order has been received and our team is already working on
          processing it.{' '}
        </p>
        <p className="lead">Please check your email for more details.</p>
        <Link to="/">Back to more shopping</Link>
      </div>
    </main>
  );
};

export default Order;
