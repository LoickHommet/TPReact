import React, { Component } from 'react';
import TacheDetail from '../../services/tache.service';
import TacheList from './TacheList';
import TacheService from '../../services/tache.service';

export default class TacheUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tache: {},
            title: "",
            completed: false
        }
    }
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async componentDidMount() {
        let { id } = this.props.match.params;
        let reponse = await TacheDetail.details(id);
        this.setState({
            tache: reponse.data,
            title: reponse.data.title,
            completed: reponse.data.completed
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        let { title, completed, tache } = this.state;

        await TacheService.update(tache.id, { title: title, completed:completed, userId: 1 });
        this.props.history.push(`/taches${tache.id}`);
    }

    render() {
        let { tache,completed, title } = this.state;
        return <div className="container">
            <h1>Modifier votre taches - {tache.title}</h1>

            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-group">
                    <lable>Taches</lable>
                    <input type="text" id="title" className="form-control" required
                        value={title}
                        onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-group">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="dropdownCheck" 
                         value={completed}
                         onChange={(e) => this.handleChange(e)} />
                        <label class="form-check-label" for="dropdownCheck"> Status </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Modifier</button>
            </form>
        </div>
    }
}
