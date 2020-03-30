import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Trans } from './components/trans';
import { Translist } from './components/translist';
import { Addtrans } from './components/addtrans';

import { GlobalProvider } from './context/GlobalState';

import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
    <Header />
    <div className="container">
      <Balance />
      <Trans />
      <Translist />
      <Addtrans />
    </div>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
