import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="text-center px-auto d-flex align-items-center fullScreen">
      <main className="form-signin w-25 m-auto">
        <form>
          <i
            className="bi bi-person-circle text-primary"
            style={{ fontSize: '4rem' }}
          ></i>
          <h1 className="h3 mb-3 fw-normal">Create a new account</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Username"
            />
            <label htmlFor="floatingInput">Username</label>
          </div>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Repeat Password"
            />
            <label htmlFor="floatingPassword">Repeat Password</label>
          </div>

          <div className="checkbox my-3">
            <label>
              <input type="checkbox" value="remember-me" /> I agree to the{' '}
              <Link to="/terms">Terms and Services</Link>
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign up
          </button>
          <p className="mt-5 mb-3 text-muted">
            Already have an account? <Link to={'/login'}>Sign in</Link> here
          </p>
        </form>
      </main>
    </div>
  );
};

export default Register;
