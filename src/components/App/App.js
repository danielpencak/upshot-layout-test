/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Products />
      </div>
    );
  }
}

export default App;
