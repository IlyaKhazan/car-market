import React from 'react';
import { render } from 'react-dom';

import './index.css';

import { App } from './App';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  window.root
);
