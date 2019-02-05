import React from 'react';
import Header from './Header';

function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

export default function Month({ month, year, events }) {

    const that = new Date(year, month, 0);

    const offset = that.getDay() + 1;

    const monthLength = daysInMonth(year, month + 1);

    const days = [];

    for (let i = 0; i < offset; i += 1) {
        const rand = Math.random();
        const day = { isFill: true, date: rand };
        days.push(day);
    }

    for (let i = 0; i < monthLength; i += 1) {
        days.push({
            date: i + 1,
            events: events[ i + 1 ]
        });
    }


    return (
        <div className="month">
            <Header/>

            { days.map(day => Day(day)) }
        </div>
    );
}

function Day({ date, month, events = [], isFill = false }) {
    return (
        <div className={ `day ${ isFill ? 'fill' : '' }` } key={ `${ date }` }>
            { !isFill && <span className="date">{ date }</span> }

            { events.map(event => (
                <button className="event" key={ event.name }>{ event.name }</button>
            )) }
        </div>
    );
}
