import React, { Component } from 'react';
import User from '../../components/User';
import UserService from '../../services/user.service';

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        let response = await UserService.list();
        this.setState({users: response});
        console.log(response);
    }

    render() {
        let {users} = this.state;
        return <div className="container">
            <h1>Liste des utilisateurs</h1>
sss
            <div className="row">
                {users.map(user => {
                    return <div className="col-md-4">
                        <User user={user}/>
                    </div>
                })}
            </div>
        </div>
    }
}