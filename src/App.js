import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Calendar from './components/calendar/Calendar';
import Navigation from './components/Navigation';
import AppController from './AppController';
import {
    IngredientsProvider,
    EventsProvider,
    EventsConsumer,
    MealsProvider,
    UnitsProvider
} from './app-context';

import './App.css';

class App extends Component {

    controller = AppController(this);

    state = {
        ingredients: [],
        meals: [],
        events: [],
        units: []
    };

    render() {
        const { controller } = this;

        const ingredientsContext = {
            ingredients: this.state.ingredients,
            loadIngredients: controller.loadIngredients,
            createIngredient: controller.createIngredient
        };

        const mealsContext = {
            meals: this.state.meals,
            loadMeals: controller.loadMeals,
            createMeal: controller.createMeal
        };

        const eventsContext = {
            events: this.state.events,
            loadEvents: controller.loadEvents
        };

        const unitsContext = {
            units: this.state.units,
            loadUnits: controller.loadUnits
        };

        return (
            <IngredientsProvider value={ ingredientsContext }>
                <MealsProvider value={ mealsContext }>
                    <EventsProvider value={ eventsContext }>
                        <UnitsProvider value={ unitsContext }>
                            <Router>

                                <div className="App">

                                    <Navigation/>

                                    <Switch>

                                        <Route path='/dashboard' component={ Dashboard }/>

                                        <EventsConsumer>
                                            { ({ events, loadEvents }) => (
                                                <Route
                                                    path='/calendar'
                                                    render={ () => (
                                                        <Calendar events={ events } loadEvents={ loadEvents }/>)
                                                    }/>
                                            ) }
                                        </EventsConsumer>

                                        <Redirect from='/' to='/dashboard'/>

                                    </Switch>

                                </div>

                            </Router>
                        </UnitsProvider>
                    </EventsProvider>
                </MealsProvider>
            </IngredientsProvider>
        );
    }

}

export default App;
