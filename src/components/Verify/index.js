import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Verify = () => {
  let yourMail = '@gamil.com';
  return (
    <div className="verify container">
      <Link to="/sign-up" className="btn btn-secondary mt-4">
        Back
      </Link>
      <h1 className="text-center p-5 mb-5">Verify</h1>
      <h3 className="text-center ">Almost there …</h3>
      <div className="verify_title text-center">
        Please check your email {yourMail} to confirm your account.
        <div className="verify_h_arrow "></div>
      </div>
      <h5 className="text-center mt-5">
        If caesar@gmail.com is not your email address, please go back and enter
        the correct one.
      </h5>
      <h5 className="text-center mt-3">
        If you haven't received our email in 15 minutes, Sign will be failed.
      </h5>
      {/* <button className="btn btn-secondary btn-block">Verify</button> */}
    </div>
  );
};

export default Verify;
