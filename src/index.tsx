import * as React from 'react';
import * as reactDOM from 'react-dom';

import './index.css';

import {App} from './App';
import {store} from "./store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

reactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, window.root);
