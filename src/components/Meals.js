import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const ingredientDefinitionFields = {
    name: {
        label: 'Name your meal'
    }
};

export default class Meals extends Component {

    static propTypes = {
        meals: PropTypes.array.isRequired,
        loadMeals: PropTypes.func.isRequired,
        createMeal: PropTypes.func.isRequired,
    };

    componentDidMount() {
        if (this.props.meals.length === 0) {
            this.props.loadMeals();
        }
    }

    render() {
        return (
            <Card
                classNames={ [ 'meals' ] }
                title='Meals'
                definitionFields={ ingredientDefinitionFields }
                handleSubmit={ this.props.createMeal }
            >
                { this.props.meals.map(meal =>
                    <li key={ meal.objectId }>{ meal.name }</li>
                ) }
            </Card>
        );
    }

}
