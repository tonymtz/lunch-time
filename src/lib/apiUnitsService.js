import Promise from 'bluebird';
import { get } from './apiService';

export const apiFetchUnits = () => new Promise((resolve, reject) =>
    get('classes/Unit', (data) => resolve(data.results), reject)
);
