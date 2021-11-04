import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './signup.css';

const SignUp = () => {
  return (
    <div className="container">
      <div className="SignUp">
        <Link to="/" className="btn btn-secondary mt-2">
          Back
        </Link>
        <h1 className="text-center mt-3">Sign up</h1>
        <label className="email_desc mt-2">Name : </label>
        <input type="email" className="input_type" placeholder="Name" />
        <label className="email_desc mt-3">Email : </label>
        <input
          type="email"
          className="input_type"
          placeholder="Email Address"
        />
        <label className="email_desc mt-3">Password : </label>
        <input type="email" className="input_type" placeholder="Password" />
        <label className="email_desc mt-3">Confirm Password : </label>
        <input
          type="email"
          className="input_type"
          placeholder="Confirm Password"
        />
        <button className="btn btn-info btn-block mt-3">Sign Up</button>
      </div>
    </div>
  );
};
export default SignUp;
