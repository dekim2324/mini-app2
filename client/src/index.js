import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
import App from './App';

ReactDOM.render(
<Provider store={createStore(reducers)}>
    <App />
</Provider>
, document.getElementById('root'));
