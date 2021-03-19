import React, { Component } from 'react';


export default class User extends Component {

    render() {
      let { user } = this.props;
      return <div className="card">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">{user.email}</p>
          <p className="card-text">{user.phone}</p>
          <p className="card-text">Nombre d'articles : {user.nbrPost}</p>
        </div>
      </div>
    }
  }