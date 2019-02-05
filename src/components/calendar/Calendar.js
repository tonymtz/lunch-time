import React, { Component } from 'react';
import Month from './Month';

const mothName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export default class Calendar extends Component {

    state = {
        month: 0,
        year: 1970,
    };

    componentDidMount() {
        if (this.state.year === 1970) {
            this.setToday();
        }
    }

    setToday = () => {
        const today = new Date();
        const month = today.getMonth();
        const year = today.getFullYear();

        this.setState({ month, year });
    };

    prevMonth = () => {
        const newState = { month: this.state.month - 1 };

        if (this.state.month === 0) {
            newState.month = 11;
            newState.year = this.state.year - 1;
        }

        this.setState(newState);
    };

    nextMonth = () => {
        const newState = { month: this.state.month + 1 };

        if (this.state.month === 11) {
            newState.month = 0;
            newState.year = this.state.year + 1;
        }

        this.setState(newState);
    };

    reloadEvents = () => {
        this.props.loadEvents(this.state.year, this.state.month + 1);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.month !== this.state.month || prevState.year !== this.state.year) {
            this.reloadEvents();
        }
    }

    render() {
        return (
            <div className="calendar">

                <h1>{ mothName[ this.state.month ] } { this.state.year }</h1>

                <button onClick={ this.prevMonth }>Prev</button>
                <button onClick={ this.setToday }>Today</button>
                <button onClick={ this.nextMonth }>Next</button>

                <Month month={ this.state.month } year={ this.state.year } events={ this.props.events }/>
            </div>
        );
    }

}
