import React, { Component } from 'react';
import Ingredients from './Ingredients';
import Meals from './Meals';
import { IngredientsConsumer, MealsConsumer, UnitsConsumer } from '../app-context';
import Units from './Units';

export default class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard">

                <IngredientsConsumer>
                    { contextProps => <Ingredients { ...contextProps }/> }
                </IngredientsConsumer>

                <MealsConsumer>
                    { contextProps => <Meals { ...contextProps }/> }
                </MealsConsumer>

                <UnitsConsumer>
                    { contextProps => <Units { ...contextProps }/> }
                </UnitsConsumer>

            </div>
        );
    }

}
