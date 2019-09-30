import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { searchCountries } from './reducer';


const store = createStore(searchCountries);


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));

