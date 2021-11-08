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
  const token = localStorage.getItem('token');

  const verifyhandler = () => {
    console.log('Token', token);
    axios.post(`http://localhost:8000/api/verify:token`, token).then((res) => {
      console.log('DATA');
      history.push('/');
    });
  };
  return (
    <div>
      <button onClick={verifyhandler}>Verify</button>
    </div>
  );
};

export default VerifyEmail;
