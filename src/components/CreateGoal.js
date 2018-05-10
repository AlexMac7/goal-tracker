import React, { Component } from 'react';

class CreateGoal extends Component {
    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Add New Goal</h3>
                <form>
                    <div className="form-group">
                        <label>Add Goal Name:  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add Goal Description: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Goal" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateGoal;
