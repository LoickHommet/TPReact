import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Tache extends Component {
    render() {
      let {tache} = this.props;
        return <div className="card">
        <div className="card-body">
        <h5 className="card-title">{tache.title}</h5>
            <p className="card-text">Tache:{tache.completed}</p>
            <p className="card-text">{tache.user.name}</p>
            <Link to={`/taches/${tache.id}`} className="btn btn-primary">Details</Link>
        </div>
    </div>

    }
}