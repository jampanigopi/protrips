import React, { Component } from 'react';

export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: [...this.props.trips],
            type: 'All'
        };
    }
    typeAll = () => {
        this.setState({
            trips: [...this.props.trips],
            type: 'All'
        });
    };
    typeTrek = () => {
        this.setState({
            trips: [
                ...this.props.trips.filter((trip) => {
                    return trip.type === 'trek';
                })
            ],
            type: 'Trek'
        });
    };
    typeClub = () => {
        this.setState({
            trips: [
                ...this.props.trips.filter((trip) => {
                    return trip.type === 'club';
                })
            ],
            type: 'Club'
        });
    };
    typeTropic = () => {
        this.setState({
            trips: [
                ...this.props.trips.filter((trip) => {
                    return trip.type === 'tropic';
                })
            ],
            type: 'Tropic'
        });
    };
    render() {
        return (
            <>
                <p className="headD">{this.state.type} Trips</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Place</th>
                            <th>Type</th>
                        </tr>
                        {this.state.trips.map((trip) => {
                            return (
                                <tr>
                                    <td>{trip.date}</td>
                                    <td>{trip.place}</td>
                                    <td>{trip.type}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="filter">
                    Filter by:
                    <span onClick={this.typeAll} className="symbol">
                        &#9898;All
                    </span>
                    <span className="symbol" onClick={this.typeTrek}>
                        &#9898;Trek
                    </span>
                    <span className="symbol" onClick={this.typeClub}>
                        &#9898;Club
                    </span>
                    <span className="symbol" onClick={this.typeTropic}>
                        &#9898;Tropic
                    </span>
                </div>
            </>
        );
    }
}