import Promise from 'bluebird';
import { get, post } from './apiService';

export const apiFetchIngredients = () => new Promise((resolve, reject) =>
    get('classes/Ingredient', (data) => resolve(data.results), reject)
);

export const apiCreateIngredient = (ingredient) => new Promise((resolve, reject) =>
    post('classes/Ingredient', ingredient, resolve, reject)
);
