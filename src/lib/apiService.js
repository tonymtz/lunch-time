import { APP_ID, API_KEY, API_GATEWAY } from '../config';

const headers = {
    'x-parse-application-id': APP_ID,
    'x-parse-rest-api-key': API_KEY
};

export const get = (uri, resolve, reject) =>
    fetch(`${ API_GATEWAY }${ uri }`, { headers })
        .then(res => {
            if (res.status === 200) {
                res.json().then(resolve);
            } else {
                reject({ error: 'server error' });
            }
        })
        .catch(reject);

export const post = (uri, body, resolve, reject) =>
    fetch(`${ API_GATEWAY }${ uri }`, {
        headers,
        method: 'POST',
        body: JSON.stringify(body)
    })
        .then(res => {
            if (res.status === 201) {
                res.json().then(resolve);
            } else {
                reject({ error: 'server error' });
            }
        })
        .catch(reject);
