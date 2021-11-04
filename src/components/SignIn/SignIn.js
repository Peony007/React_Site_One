import React from 'react';
// import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
import { GET_GOOGLE_LOGIN } from '../../actions/types';
import { Link } from 'react-router-dom';
import $ from 'jquery';
// import SignUp from '../../components/SignUp';

import './index.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';

// $('#hide').click(function () {
//   $('p').hide();
// });

// $('#closeModal').click(function () {
//   // removeClass('.modal-backdrop fade show');
//   $('.modal-backdrop fade show').removeClass;
// });
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
  // const closeModal = () => {
  //   // document.getElementById('myModal').style.width = '0%';
  //   console.log('CloseModal');
  // };

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
              <div className="d-flex justify-content-between">
                <Link
                  id="closeModal"
                  to="/sign-up"
                  className="btn btn-info mt-4"
                >
                  Sign Up
                </Link>
                <Link to="/forgot" className="btn btn-danger mt-4">
                  Forgot
                </Link>
              </div>
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
