import React, { Component } from 'react';
import UserService from '../../services/user.service';

export default class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    async componentDidMount() {
        let response = await UserService.details(this.props.match.params.id);
        this.setState({user: response.data});
    }


    render() {
        let {user} = this.state;
        return <div className="container">
            <h1>{user.name}</h1>
            <p>Email : {user.email}</p>
            <p>Phone : {user.phone}</p>
            <p>Taches: {user.nbrPost}</p>
        </div>
    }


}