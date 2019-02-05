import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const ingredientDefinitionFields = {
    name: {
        label: 'Name your ingredient'
    }
};

export default class Ingredients extends Component {

    static propTypes = {
        ingredients: PropTypes.array.isRequired,
        loadIngredients: PropTypes.func.isRequired,
        createIngredient: PropTypes.func.isRequired,
    };

    componentDidMount() {
        if (this.props.ingredients.length === 0) {
            this.props.loadIngredients();
        }
    }

    render() {
        return (
            <Card
                classNames={ [ 'ingredients' ] }
                title='Ingredients'
                definitionFields={ ingredientDefinitionFields }
                handleSubmit={ this.props.createIngredient }
            >
                { this.props.ingredients.map(ingredient =>
                    <li key={ ingredient.objectId }>{ ingredient.name }</li>
                ) }
            </Card>
        );
    }

}
