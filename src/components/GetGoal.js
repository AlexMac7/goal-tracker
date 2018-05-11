import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

class GetGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {goals: []};
    }
    componentDidMount(){
        axios.get('http://localhost:4200/goal')
            .then(response => {
                this.setState({ goals: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){
        return this.state.goals.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Description</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default GetGoal;
