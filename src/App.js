import './App.css';
import React, { Component } from 'react'
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AddTrip from './components/AddTrip';
import Display from './components/Display';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      trips: [
        { date: "2017-01-10", place: "tirupati", type: "trek" },
        { date: "2017-04-05", place: "goa", type: "club" },
        { date: "2017-02-09", place: "lambasingi", type: "tropic" },
        { date: "2020-10-21", place: "srisailam", type: "trek" }
      ]
    }
  }
  addTrip = (newTrips) => {
    this.setState({
      trips: [...newTrips]
    })
  }
  render() {
    return (
      <>
        <Router>
          <Header />
          <div className="workplace">
            <Switch>
              <Route exact path="/"><Home trips={this.state.trips} /></Route>
              <Route path="/addTrip"><AddTrip addTrip={this.addTrip} trips={this.state.trips} /></Route>
              <Route path="/display"><Display trips={this.state.trips} /></Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}