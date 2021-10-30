import React from 'react';
import MainContainer from './pages/@MainContainer';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <MainContainer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
