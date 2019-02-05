import React, { Component } from 'react';
import Ingredients from './Ingredients';
import Meals from './Meals';
import { IngredientsConsumer, MealsConsumer } from '../app-context';

export default class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard">

                <IngredientsConsumer>
                    { ({ ingredients, loadIngredients, createIngredient }) => (
                        <Ingredients
                            createIngredient={ createIngredient }
                            loadIngredients={ loadIngredients }
                            ingredients={ ingredients }/>
                    ) }
                </IngredientsConsumer>

                <MealsConsumer>
                    { ({ meals, loadMeals, createMeal }) => (
                        <Meals
                            createMeal={ createMeal }
                            loadMeals={ loadMeals }
                            meals={ meals }/>
                    ) }
                </MealsConsumer>

            </div>
        );
    }

}
