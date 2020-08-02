import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import WebPage from './сomponents/webPage';


// * Использовали главный Reducer для этого
const store = createStore(allReducers);

ReactDOM.render(
  // * Связывает провайдер и лог часть
  <Provider store={store}> 
    <WebPage/>
  </Provider>, 
  document.getElementById('testRedux')
);
