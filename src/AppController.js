import { apiCreateIngredient, apiFetchIngredients } from './lib/apiIngredientsService';
import { apiCreateMeal, apiFetchMeals } from './lib/apiMealsService';
import { apiFetchEvents } from './lib/apiEventsService';

export default function ActivitiesController(component) {
    return {
        loadIngredients,
        createIngredient,
        loadMeals,
        createMeal,
        loadEvents
    };

    function loadIngredients() {
        apiFetchIngredients()
            .then(ingredients => {
                component.setState({ ingredients });
            })
            .catch(console.error);
    }

    function createIngredient(ingredient) {
        apiCreateIngredient(ingredient)
            .then(() => {
                console.log('done');
            })
            .catch(console.error);
    }

    function loadMeals() {
        apiFetchMeals()
            .then(meals => {
                component.setState({ meals });
            })
            .catch(console.error);
    }

    function createMeal(meal) {
        apiCreateMeal(meal)
            .then(() => {
                console.log('done');
            })
            .catch(console.error);
    }

    function loadEvents(year, month) {
        apiFetchEvents(year, month)
            .then(events => {
                component.setState({ events });
            })
            .catch(console.error);
    }
}
