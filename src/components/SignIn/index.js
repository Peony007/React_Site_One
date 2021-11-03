import React from 'react';
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
import { GET_GOOGLE_LOGIN } from '../../actions/types';

import './index.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';

const ModalLogin = (props) => {
  const dispatch = useDispatch();
  let googleAuthenticated = useSelector((state) => state.auth);
  console.log('googleAuthenticated', googleAuthenticated);

  const googleAuth = () => {
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();
    signInWithPopup(auth, googleprovider)
      .then(() => {
        dispatch({
          type: GET_GOOGLE_LOGIN,
          payload: auth,
        });
        window.localStorage.setItem('emailForSignIn', auth);
      })
      .catch((err) => console.log(err));
  };
  console.log('Props', props);

  return (
    <div className="modal fade" id="myModal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="text-center  modal-title ">Sign In</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div className="modal-body">
            <div className="container d-flex flex-column">
              <div className="">
                <label className="email_desc">Email : </label>
                <input
                  type="email"
                  className="LoginEmail"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label>Password : </label>
                <input
                  type="password"
                  className="LoginPassword"
                  placeholder="Password"
                />
              </div>
              <div>
                <button className="Login_btn">Sign In</button>
              </div>
              <button className="btn btn-info mt-4">Sign Up</button>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-info" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
