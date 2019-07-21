import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// ----------------------------------
// BEZ loggera i DevTools:
//import { createStore } from 'redux';
// ----------------------------------
import reducer from './reducer';
import { addComment } from './actions';
// ----------------------------------
// METODA Z LOGGEREM:
//import { createStore, applyMiddleware } from 'redux';
//import { createLogger } from 'redux-logger';
// ----------------------------------
// METODA Z DevTools:
import { createStore, combineReducers } from 'redux';
import DevTools from './DevTools';

// ----------------------------------
// METODA Z LOGGEREM:
// const logger = createLogger();
//const store = createStore(
//  reducer,
//  applyMiddleware(logger)
//);
// ----------------------------------

// METODA Z DEVTOOLS:
const store = createStore(
  reducer,
  DevTools.instrument()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.dispatch(addComment('drugi komentarz'));
store.dispatch(addComment('pierwszy komentarz'));
registerServiceWorker();