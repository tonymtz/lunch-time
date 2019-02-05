import React from 'react';

const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

export default function Week() {
    return (
        <div className="header">
            { weekDays.map(weekDay => (
                <div className="day fill" key={ weekDay }>
                    <span className="name">{ weekDay }</span>
                </div>
            )) }
        </div>
    );
}
