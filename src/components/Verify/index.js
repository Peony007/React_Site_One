import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const VerifyEmail = () => {
  const history = useHistory();
  // const verify = () => {
  //   alert('Your email has verified');
  //   history.push('/');
  //   // const { token } = useParams();
  //   axios.post('http://localhost:8000/api/verify:token');
  // };
  const { token } = useParams();
  axios
    .post('http://localhost:8000/api/verify', { token: token })
    .then((res) => {
      console.log('DATA', res.data);
      setTimeout(() => {
        history.push('/');
      }, 1000);
    });

  const handler = () => {
    console.log('Handler');
  };
  return (
    <div className="">
      <h1 className=" mt-5 text-center">Verify Email</h1>
      <hr />
      <div className="d-flex justify-content-center">
        {/* <a className=" btn btn-success " onClick={verifyhandler}>
          Email Verify
        </a> */}
        {/* {() => {
          verifyhandler();
        }} */}
        {/* {() => {
          handler();
        }} */}
      </div>
    </div>
  );
};

export default VerifyEmail;
