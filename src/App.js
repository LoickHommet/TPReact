import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './views/Home';
import TacheAdd from './views/Tache/TacheAdd';
import TacheDetail from './views/Tache/TacheDetail';
import TacheUpdate from './views/Tache/TacheUpdate';
import TacheList from './views/Tache/TacheList';
import UserDetail from './views/User/UserDetail';
import UserList from './views/User/UserList';
export default class App extends Component {

  render() {
    return <BrowserRouter>

      <Header />
    
      <switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/taches" component={TacheList} />
        <Route exact path="/taches/ajouter" component={TacheAdd} />
        <Route exact path="/taches/:id" component={TacheDetail} />
        <Route exact path="/taches/:id/modifier" component={TacheUpdate} />
        <Route exact path="/users" component={UserList} />
        <Route exact path="/users/:id" component={UserDetail} />
        

      </switch>
      <Footer/>
    </BrowserRouter>
  }
}