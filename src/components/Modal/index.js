import React from 'react';
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
import { GET_GOOGLE_LOGIN } from '../../actions/types';
import {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from 'firebase/auth';

import './index.css';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from '@firebase/auth';

const modalClose = () => {
  $('.modal_login').css('display', 'none');
};

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'https://www.example.com/finishSignUp?cartId=1234',
  // This must be true.
  handleCodeInApp: true,
  // iOS: {
  //   bundleId: 'com.example.ios',
  // },
  // android: {
  //   packageName: 'com.example.android',
  //   installApp: true,
  //   minimumVersion: '12',
  // },
  dynamicLinkDomain: 'example.page.link',
};

const emailAuth = () => {
  // Confirm the link is a sign-in with email link.
  const auth = getAuth();
  let email = window.localStorage.getItem('emailForSignIn');

  sendSignInLinkToEmail(auth, email, actionCodeSettings).then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    // ...
  });
  if (isSignInWithEmailLink(auth, window.location.href)) {
    if (!email) {
      email = window.prompt('Please provide your email for confirmation');
    }
    // The client SDK will parse the code    the link for you.
    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        // Clear email from storage.
        window.localStorage.removeItem('emailForSignIn');
      })
      .catch((error) => {
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
      });
  }
};

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
    <div className=" modal_login">
      <div className="col">
        <div className="d-flex justify-content-end">
          <span className="btn_close" onClick={modalClose}>
            &times;
          </span>
        </div>
        <h1 className="text-center modal_text">Login</h1>
        <br />
        <button className="google btn btn-block" onClick={() => googleAuth()}>
          <i className="fa fa-google fa-fw"></i> Login with Google+
        </button>
        <button
          href="#"
          className="email btn btn-block"
          onClick={() => emailAuth()}
        >
          <i className="fa fa-envelope "></i> Login with Email+
        </button>
        <a href="#" className="fb btn btn-block">
          <i className="fa fa-facebook fa-fw"></i> Login with Facebook
        </a>
        <a href="#" className="twitter btn btn-block">
          <i className="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
      </div>
    </div>
  );
};

export default ModalLogin;
