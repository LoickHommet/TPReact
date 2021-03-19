import React, { Component } from 'react';
import Post from '../../components/Post';
import { Link } from 'react-router-dom';
import PostService from '../../services/post.service';

export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[],
        }
    }

    async componentDidMount() {
        let posts = await PostService.list(15);
        console.log(posts);
        this.setState({ posts: posts}); 
    }

    render() {
        let {posts} = this.state;
        return (
            <div className="container">
                <h1>Liste des tâches des utilisateurs  </h1>
                <Link className="btn btn-primary" to="/taches/ajouter">Ajouter une taches</Link>
                <div className="row">
                {posts.map(post => {                   
                    return <div className="col-md-4">
                        <Post post={post}/>
                    </div>
                })}
            </div>
            </div>
        )
    }
}