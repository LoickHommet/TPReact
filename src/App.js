import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header';


export default class App extends Component {

  render() {
    return <BrowserRouter>

      <Header />
      <switch>
        <Route exact path="/" component={} />
        
      </switch>
    </BrowserRouter>
  }
}