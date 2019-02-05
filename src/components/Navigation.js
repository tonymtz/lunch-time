import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <nav>
        <ul>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/calendar">Calendar</Link>
            </li>
        </ul>
    </nav>
);
