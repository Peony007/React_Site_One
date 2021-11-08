import React from 'react';
import MainContainer from './pages/@MainContainer';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import SignUp from './components/SignUp/SignUp';
import ForgotPassword from './components/ForgotPassword';
// import Verify from './components/Verify';
// import SignIn from './components/SignIn/SignIn';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/forgot" component={ForgotPassword} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
