import React, { Component } from 'react';
import PostService from '../../services/post.service';
import UserService from '../../services/user.service';
import { Link } from 'react-router-dom';

export default class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            user: {}
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let  reponse = await PostService.details(id);
        this.setState({post: reponse.data});

        let responseUsers = await UserService.details(this.props.match.params.id);
        this.setState({user: responseUsers.data});
    }

    async handleDelete() {
        let {post} = this.state;
      await PostService.delete(post.id);
      this.props.history.push('/taches')
    }


render() {
    let { post, user } = this.state;
    return <div className="container">
      <h1>Listes des taches</h1>
      <h2>Detail</h2>
      <p>Nom de la taches:{post.title}</p>
      <p>Status:{post.completed}</p>
      <p>Nom de l'utilisateur:{user.name}</p>
      <button className="btn btn-danger" onClick={() => this.handleDelete()}>Suprimer</button>
      <Link to={`/taches/${post.id}/modifier`} className="btn btn-secondary">Modifier</Link>
    </div>
}


}