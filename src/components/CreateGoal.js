import React, { Component } from 'react';
import axios from 'axios';

class CreateGoal extends Component {
    constructor(props) {
        super(props);
        this.onChangeGoalName = this.onChangeGoalName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: ''
        }
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
        axios.post('http://localhost:4200/goal/add', goal)
            .then(res => console.log(res.data));
        this.setState({
            name: '',
            description: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Add New Goal</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Goal Name:  </label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeGoalName} />
                    </div>
                    <div className="form-group">
                        <label>Goal Description: </label>
                        <input type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Goal" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateGoal;
