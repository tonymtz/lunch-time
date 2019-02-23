import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class Units extends Component {

    static propTypes = {
        units: PropTypes.array.isRequired,
        loadUnits: PropTypes.func.isRequired
    };

    componentDidMount() {
        if (this.props.units.length === 0) {
            this.props.loadUnits();
        }
    }

    render() {
        return (
            <Card
                classNames={ [ 'units' ] }
                title='Units'
                handleSubmit={ this.props.createUnit }
            >
                { this.props.units.map(unit =>
                    <li key={ unit.objectId }>{ unit.name } ({ unit.symbol })</li>
                ) }
            </Card>
        );
    }

}
