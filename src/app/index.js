import React, { Component } from 'react';

import './index.css';
import './styles/vars.css';
import './styles/normalize.css';
import './styles/index.css';

import { MainPage } from '../pages/main';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage />
      </div>
    );
  }
};
