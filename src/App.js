import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateGoal from './components/CreateGoal';
import PatchGoal from './components/PatchGoal';
import GetGoal from './components/GetGoal';

class App extends Component {
  render() {
    return (
        <Router>
            <div className={"App"}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Your Goal Tracker</h1>
                </header>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/create'}>Create</Link></li>
                    <li><Link to={'/get'}>List</Link></li>
                    <li><Link to={'/patch/:id'}>Edit</Link></li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path='/create' component={CreateGoal} />
                    <Route path='/get' component={GetGoal} />
                    <Route path='/patch/:id' component={PatchGoal} />
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
