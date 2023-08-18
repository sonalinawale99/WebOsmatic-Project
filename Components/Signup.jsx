import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const navigate = useNavigate();
  

  const isEmailValid = (email) => {
    return email.endsWith('@gmail.com') && email[0] === email[0].toLowerCase();
  };

  const isPasswordValid = (password) => {
    return password.length >= 7;
  };

  const handleSignup = () => {
    if (isEmailValid(email) && isPasswordValid(password) && password === confirmedPassword) {
      const user = { email, password };
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/signin');
    } else {
      if (!isEmailValid(email)) {
        alert('Please enter a valid email address with @gmail.com domain and first letter is small.');
      } else if (!isPasswordValid(password)) {
        alert('Password should be at least 7 characters long and contain at least one number.');
      } else {
        alert('Passwords do not match.');
      }
    }
  };

  return (
    <div className="container mt-5" >
      <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">Sign Up</h2>
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
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={confirmedPassword}
                  onChange={(e) => setConfirmedPassword(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button" onClick={handleSignup}>Sign Up</button>
              </div>
            </form>
            <p className="mt-3 text-center">
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
