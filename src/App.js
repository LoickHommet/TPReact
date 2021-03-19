import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './views/Home';
import PostAdd from './views/Post/PostAdd';
import PostDetail from './views/Post/PostDetail';
import PostList from './views/Post/PostList';


export default class App extends Component {

  render() {
    return <BrowserRouter>

      <Header />
    
      <switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/taches" component={PostList} />
        <Route exact path="/taches/ajouter" component={PostAdd} />
        <Route exact path="/taches/:id" component={PostDetail} />
      </switch>
      <Footer/>
    </BrowserRouter>
  }
}