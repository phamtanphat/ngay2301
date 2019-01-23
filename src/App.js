import React, { Component } from 'react';
import './App.css';
import List from './Component/List.js';
import store from './redux/store';


import {Provider} from 'react-redux';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <List/>
      </Provider>
    );
  }
}

export default App;
