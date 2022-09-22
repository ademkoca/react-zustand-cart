import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserStore } from '../user';

const Login = () => {
  //   const loginUser = useUserStore((state) => state.login);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //   const [username, setUsername] = useState("")
  //   console.log(username);
  const loginUser = useUserStore((state) => state.login);
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'ademkoca' && password === 'adem123') {
      loginUser({ username: username, password: password });
      window.location.href = '/';
    }
  };
  return (
    <div
      className="text-center px-auto d-flex align-items-center fullScreen"
      
    >
      <main className="form-signin w-md-25 w-sm-100 m-auto">
        <form>
          <i
            className="bi bi-person-circle text-primary"
            style={{ fontSize: '4rem' }}
          ></i>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              onChange={(e) => setUsername(e.target.value)}
              //   placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox my-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button
            onClick={(e) => handleLogin(e)}
            className="w-100 btn btn-lg btn-primary"
            type="submit"
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">
            You don't have an account? <Link to={'/register'}>Sign up</Link>{' '}
            here
          </p>
        </form>
      </main>
    </div>
  );
};

export default Login;
