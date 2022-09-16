import React, { useState } from 'react';
import './style.css';
import { useItemseStore } from '../store';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const items = useItemseStore((state) => state.items);
  const [promoOK, setPromoOK] = useState(false);
  const [promo, setPromo] = useState('');
  const [user, setUser] = useState({
    fName: '',
    lName: '',
    email: '',
    address: '',
    country: '',
    state: '',
    zip: '',
    cart: items,
  });
  //   console.log(user);
  const verifyPromo = (e) => {
    e.preventDefault();
    if (promo === 'BEBA') setPromoOK(true);
  };
  let total = 0;
  if (promoOK) total -= 5;
  items.forEach((item) => (total += item.itemPrice * item.qty));
  const submitForm = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <main>
      <div className="py-5 text-center">
        <i className="bi bi-check-circle-fill" style={{ fontSize: '3rem' }}></i>
        <h2>Checkout</h2>
        <p className="lead">Please check your order before proceeeding</p>
      </div>

      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill d-flex align-items-center">
              {items.length}
            </span>
          </h4>
          <ul className="list-group mb-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between lh-sm"
              >
                <div>
                  <h6 className="my-0">{item.itemName}</h6>
                  <small className="text-muted">{item.itemDesc}</small>
                  <p className="text-muted">Qty: {item.qty}</p>
                  <p className="mb-0">
                    <strong>Total:</strong>
                  </p>
                </div>
                <div className="d-flex flex-column justify-content-between">
                  <span className="text-muted">${item.itemPrice}</span>
                  <span className="text-muted">
                    <strong>${item.itemPrice * item.qty}</strong>
                  </span>
                </div>
              </li>
            ))}
            {promoOK && (
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>BEBA</small>
                </div>
                <span className="text-success">−$5</span>
              </li>
            )}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${total}</strong>
            </li>
          </ul>

          <form className="card p-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Promo code"
                onChange={(e) => setPromo(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={(e) => verifyPromo(e)}
              >
                Redeem
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" noValidate>
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  //   required
                  onChange={(e) => setUser({ ...user, fName: e.target.value })}
                  value={user.fName}
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  required
                  onChange={(e) => setUser({ ...user, lName: e.target.value })}
                  value={user.lName}
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  value={user.email}
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                  value={user.address}
                  onChange={(e) =>
                    setUser({ ...user, address: e.target.value })
                  }
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="col-md-5">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <select
                  className="form-select"
                  id="country"
                  required
                  onChange={(e) =>
                    setUser({ ...user, country: e.target.value })
                  }
                  value={user.country}
                >
                  <option value="">Choose...</option>
                  <option>United States</option>
                  <option>Serbia</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <select
                  className="form-select"
                  id="state"
                  required
                  onChange={(e) => setUser({ ...user, state: e.target.value })}
                  value={user.state}
                >
                  <option value="">Choose...</option>
                  <option>California</option>
                  <option>Serbia</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder=""
                  required
                  onChange={(e) => setUser({ ...user, zip: e.target.value })}
                  value={user.zip}
                />
                <div className="invalid-feedback">Zip code required.</div>
              </div>
            </div>

            <hr className="my-4" />

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="same-address"
              />
              <label className="form-check-label" htmlFor="same-address">
                Shipping address is the same as my billing address
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="save-info"
              />
              <label className="form-check-label" htmlFor="save-info">
                Save this information for next time
              </label>
            </div>

            <hr className="my-4" />

            <h4 className="mb-3">Payment</h4>

            <div className="my-3">
              <div className="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  //   defaultValue
                  required
                  onChange={(e) => setUser({ ...user, cCard: e.target.value })}
                  value={user.cCard}
                />
                <label className="form-check-label" htmlFor="credit">
                  Credit card
                </label>
              </div>
              <div className="form-check">
                <input
                  id="cash"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required
                />
                <label className="form-check-label" htmlFor="cash">
                  Cash on delivery
                </label>
              </div>
            </div>

            <div className="row gy-3">
              <div className="col-md-6">
                <label htmlFor="cc-name" className="form-label">
                  Name on card
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  placeholder=""
                  required
                />
                <small className="text-muted">
                  Full name as displayed on card
                </small>
                <div className="invalid-feedback">Name on card is required</div>
              </div>

              <div className="col-md-6">
                <label htmlFor="cc-number" className="form-label">
                  Credit card number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="cc-expiration" className="form-label">
                  Expiration
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">Expiration date required</div>
              </div>

              <div className="col-md-3">
                <label htmlFor="cc-cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">Security code required</div>
              </div>
            </div>

            <Link
              to="/order"
              className="w-100 btn btn-primary btn-lg mt-5 mb-3"
              type="submit"
              onClick={(e) => submitForm(e)}
            >
              Submit order
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
