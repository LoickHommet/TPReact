import React, { Component } from 'react';
import Tache from '../../components/Tache';
import { Link } from 'react-router-dom';
import TacheService from '../../services/tache.service';

export default class TacheList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taches:[],
        }
    }

    async componentDidMount() {
        let taches = await TacheService.list(15);
        console.log(taches);
        this.setState({ taches: taches}); 
    }

    render() {
        let {taches} = this.state;
        return (
            <div className="container">
                <h1>Liste des tâches des taches  </h1>
                <Link className="btn btn-primary" to="/taches/ajouter">Ajouter une taches</Link>
                <div className="row">
                {taches.map(tache => {                   
                    return <div className="col-md-4">
                        <Tache tache={tache}/>
                    </div>
                })}
            </div>
            </div>
        )
    }
}