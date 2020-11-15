import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import WebPage from './сomponents/webPage';


// * Использовали главный Reducer для этого

// * allReducers используется для объединения всех редьюсеров
const store = createStore(allReducers);

ReactDOM.render(
  // * Провайдер нужен для того, чтобы передать store в приложение
  <Provider store={store}> 
    <WebPage/>
  </Provider>, 
  document.getElementById('testRedux')
);
