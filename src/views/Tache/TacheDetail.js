import React, { Component } from 'react';
import TacheService from '../../services/tache.service';
import UserService from '../../services/user.service';
import { Link } from 'react-router-dom';

export default class TacheDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tache: {},
            user: {}
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let  reponse = await TacheService.details(id);
        this.setState({tache: reponse.data});

        let responseUsers = await UserService.details(this.props.match.params.id);
        this.setState({user: responseUsers.data});
    }

    async handleDelete() {
        let {tache} = this.state;
      await TacheService.delete(tache.id);
      this.props.history.push('/taches')
    }


render() {
    let { tache, user } = this.state;
    return <div className="container">
      <h1>Listes des taches</h1>
      <h2>Detail</h2>
      <p>Nom de la taches:{tache.title}</p>
      <p>Status:{tache.completed}</p>
      <p>Nom de l'utilisateur:</p> <Link to={`/users/${tache.id}`} className="breadcrumb-item">{user.name}</Link>
      <button className="btn btn-danger" onClick={() => this.handleDelete()}>Suprimer</button>
      <Link to={`/taches/${tache.id}/modifier`} className="btn btn-secondary">Modifier</Link>
    </div>
}


}