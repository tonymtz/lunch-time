import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Calendar from './components/calendar/Calendar';
import Navigation from './components/Navigation';
import AppController from './components/AppController';
import {
    IngredientsProvider,
    EventsProvider,
    EventsConsumer, MealsProvider
} from './app-context';

import './App.css';

class App extends Component {

    controller = AppController(this);

    state = {
        ingredients: [],
        meals: [],
        events: []
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

        return (
            <IngredientsProvider value={ ingredientsContext }>
                <MealsProvider value={ mealsContext }>
                    <EventsProvider value={ eventsContext }>
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
                    </EventsProvider>
                </MealsProvider>
            </IngredientsProvider>
        );
    }

}

export default App;
