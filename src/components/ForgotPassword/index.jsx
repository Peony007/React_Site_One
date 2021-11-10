

import { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios'
import Swal from 'sweetalert2';
import './style.css';

const ForgotPassword = () => {
    const history = useHistory()
  const [user, setUser] = useState({
          email: '',
          password: '',
          password_confirmation: ''
      })
   
   const handleChange = (e) => {
       setUser(
           {...user, [e.target.name]: e.target.value}
       )
   }
    const resetPassword = (e)=>{ 
        e.preventDefault();
        // process.env.REACT_APP_BASE_URL + `resetpassword`
        axios.post(process.env.REACT_APP_BASE_URL + `resetpassword`, {email: user.email, password: user.password}).then((res)=>{
            Swal.fire({
                title: 'Hi',
                text: 'We send password email to you. Please check your email.',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            console.log(res.data)
            history.push('/')
        }).catch((error)=>{
            Swal.fire({
                title: 'Hi',
                text: 'Your Eamil or Password is invalid!.',
                icon: 'error',
                confirmButtonText: 'OK'
              })
        })
    }
    const handleClose=()=>{
        history.push('/')
    }
  return (
    <div className="reset_password">
        <h1 className="text-center">Password Reset</h1>
        <form onSubmit={resetPassword}>
            <label className="mt-5">Email</label>
            <input
                className="form-control p-3"
                placeholder="Email"
                name="email"
                required
                value={user.email}
                onChange={handleChange}
            />
            <label className="mt-3">Password</label>
            <input
                type="password"
                className="form-control p-3"
                placeholder="Password"
                name="password"
                required
                value={user.password}
                onChange={handleChange}
            />
            <label className="mt-3">Password Confirm</label>
            <input
                type="password"
                className="form-control p-3"
                placeholder="password_confirmation"
                name="password_confirmation"
                value={user.password_confirmation}
                onChange={handleChange}
                required
            />
            <input 
                type="submit"
                value="Reset Password"
                className="btn btn-info btn-block mt-5"
            />
        </form>
        <button className="btn btn-danger mt-4 btn-block" onClick={handleClose}>
            Cancel
        </button>
    </div>
  );
};

export default ForgotPassword;