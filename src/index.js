import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import musicPlayerReducer from './store/musicPlayerReducer';
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore(musicPlayerReducer, composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
