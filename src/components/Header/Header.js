/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="nav">
          <div className="logoCont">
            <img alt="Logo" src="/assets/logo.png" />
          </div>
          <HeaderNav />
        </div>
        <h1>THIS IS A HEADLINE.</h1>
      </div>
    );
  }
}

export default Header;
