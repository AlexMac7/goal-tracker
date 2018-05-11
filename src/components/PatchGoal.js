import React, { Component } from 'react';
import axios from 'axios';

class PatchGoal extends Component {
    constructor(props) {
        super(props);
        this.onChangeGoalName = this.onChangeGoalName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {name: '', description: ''};
    }

    componentDidMount() {
        axios.get('http://localhost:4200/goal/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ name: response.data.name, description: response.data.description });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeGoalName(event) {
        this.setState({
            name: event.target.value
        });
    }
    onChangeDescription(event) {
        this.setState({
            description: event.target.value
        });
    }
    onSubmit(event) {
        event.preventDefault();
        const goal = {
            name: this.state.name,
            description: this.state.description
        }
        axios.post('http://localhost:4200/goal/update/'+this.props.match.params.id, goal)
            .then(res => console.log(res.data));
        this.setState({
            name: '',
            description: ''
        })
        this.props.history.push('/get');
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Edit Goal</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Goal Name:  </label>
                        <input type="text" value={this.state.name} className="form-control" onChange={this.onChangeGoalName}/>
                    </div>
                    <div className="form-group">
                        <label>Goal Description: </label>
                        <input type="text" value={this.state.description} className="form-control" onChange={this.onChangeDescription}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Goal" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default PatchGoal;
