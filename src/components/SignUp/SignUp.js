import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import './signup.css';

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const signupData = {
    name: user.name,
    email: user.email,
    password: user.password,
    password_confirmation: user.password_confirmation,
  };

  const SignUphandler = () => {
    axios.post('http://localhost:8000/api/register', signupData).then((res) => {
      // console.log(res.data);
      history.push('/');
      Swal.fire({
        title: 'Welcome',
        text: 'You need to verify your email. Please check your email-box',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    });
    console.log('Happy');
  };
  return (
    <div className="container">
      <div className="SignUp">
        <Link to="/" className="btn btn-secondary mt-2">
          Back
        </Link>
        <h1 className="text-center mt-3">Sign up</h1>

        <label className="email_desc mt-2">Name : </label>
        <input
          type="text"
          className="input_type"
          placeholder="Name"
          value={user.name}
          name="name"
          onChange={onChange}
        />
        <label className="email_desc mt-3">Email : </label>
        <input
          type="email"
          className="input_type"
          placeholder="Email Address"
          value={user.email}
          name="email"
          onChange={onChange}
        />
        <label className="password_desc mt-3">Password : </label>
        <input
          type="password"
          className="input_type"
          placeholder="Password"
          value={user.password}
          name="password"
          onChange={onChange}
        />
        <label className="password_desc mt-3">Password : </label>
        <input
          type="password"
          className="input_type"
          placeholder="password_confirmation"
          value={user.password_confirmation}
          name="password_confirmation"
          onChange={onChange}
        />

        <button className="btn btn-info btn-block mt-3" onClick={SignUphandler}>
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default SignUp;
