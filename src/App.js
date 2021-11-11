import React from 'react';
import MainContainer from './pages/@MainContainer';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import SignUp from './components/SignUp/SignUp';
import ForgotPassword from './components/ForgotPassword';
import VerifyEmail from './components/Verify';
// import SignIn from './components/SignIn/SignIn';

import ResetPassword from './components/ResetPassword';
import dotenv from 'dotenv';

dotenv.config();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/forgot" component={ForgotPassword} />
          {/* <Route exact path="/verify:token" component={VerifyEmail} /> */}
          <Route exact path="/verify/:token" component={VerifyEmail} />
          <Route path="/resetpassword/:token" component={ResetPassword} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
