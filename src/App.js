import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store'
import './App.css';
import './css/custom.css'
import Routes from './Router/Routes';
function App () {
  return (
    <>
      <Provider store={store}>
          <Routes />
      </Provider>
    </>
  );
}
export default App;