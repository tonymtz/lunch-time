import Promise from 'bluebird';

const database = {
    '2019-2': {
        '18': [
            { name: 'Tuna Salad' }
        ],
        '19': [
            { name: 'Quesadilla' },
            { name: 'Sushi' },
            { name: 'Fried Chicken' }
        ],
        '21': [
            { name: 'Quesadilla' },
            { name: 'Cereal' }
        ],
    },
    '2019-3': {
        '4': [
            { name: 'Turkey Sub' }
        ],
        '6': [
            { name: 'Cereal' },
            { name: 'Chicken Salad' },
            { name: 'Tuna and Bread' }
        ],
        '7': [
            { name: 'Quesadilla' },
            { name: 'Cereal' }
        ],
    }
};

export const apiFetchEvents = (year, month) => new Promise((resolve, reject) =>
    resolve(database[ `${ year }-${ month }` ] || {}));
