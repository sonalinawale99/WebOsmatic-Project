import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    return email.endsWith('@gmail.com') && email[0] === email[0].toLowerCase();
  };

  const isPasswordValid = (password) => {
    return password.length >= 7;
  };

  const handleSignin = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      if (user.email === email && user.password === password) {
        navigate('/contact');
      } else {
        alert('Invalid email or password.');
      }
    } else {
      alert('No user found. Please sign up.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">Sign In</h2>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button" onClick={handleSignin}>
                  Sign In
                </button>
              </div>
            </form>
            <p className="mt-3 text-center">
              Don't have an account? <Link to="/">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
