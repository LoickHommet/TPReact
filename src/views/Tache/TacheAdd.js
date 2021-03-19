import React, { Component } from 'react';
import TacheService from '../../services/tache.service';

export default class TacheAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            completed: false,
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }


    async handleSubmit(e) {
        e.preventDefault();
        let { title, completed } = this.state;

        let data = {
            title: title,
            completed: completed,
            userId: 1,
        }
       
        let reponse = await TacheService.create(data);
        console.log(reponse);
        
        
    }


    render() {
        return <div className="container">
            <h1>Ajouter votre articles</h1>

            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-group">
                    <lable>Nom de la tache</lable>
                    <input type="text" id="title" className="form-control" required
                        onChange={(e) => this.handleChange(e)} />
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    }
}