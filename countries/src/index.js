import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { countryReducer } from './reducers/CountryReducer';

const store = createStore(
  countryReducer,
  applyMiddleware(/* be sure to throw in the proper middlewares here*/ thunk)
);

// Add "Provider" and pass the above store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
