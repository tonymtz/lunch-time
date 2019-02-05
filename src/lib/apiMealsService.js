import Promise from 'bluebird';
import { get, post } from './apiService';

export const apiFetchMeals = () => new Promise((resolve, reject) =>
    get('classes/Meal', (data) => resolve(data.results), reject)
);

export const apiCreateMeal = (meal) => new Promise((resolve, reject) =>
    post('classes/Meal', meal, resolve, reject)
);
