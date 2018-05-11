import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateGoal from './components/CreateGoal';
import PatchGoal from './components/PatchGoal';
import GetGoal from './components/GetGoal';

class App extends Component {
  render() {
    return (
        <Router>
            <div className={"container"}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand">Your Goal Tracker</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className={"nav-item"}>
                                <Link to={'/'} className={"nav-link"}>Home</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link to={'/create'} className={"nav-link"}>Create</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link to={'/get'} className={"nav-link"}>List</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path='/create' component={CreateGoal} />
                    <Route path='/get' component={GetGoal} />
                    <Route path='/edit/:id' component={PatchGoal} />
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
