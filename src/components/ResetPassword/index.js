import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const ResetPassword = () => {
  const history = useHistory();

  const { token } = useParams();

  axios
    .post(process.env.REACT_APP_BASE_URL + `setresetpassword`, { token: token })
    .then((res) => {
      setTimeout(() => {
        history.push('/');
      }, 1500);
      console.log('DATA', res.data);
      return res.data;
    });

  return (
    <div>
      <h1 className="text-center">ResetPassword Success</h1>
    </div>
  );
};

export default ResetPassword;
