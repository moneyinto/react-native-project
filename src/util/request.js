import fetch from 'react-native-fetch-polyfill';

function parseJSON(response) {
    return response.json();
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.json());
    error.response = response;
    throw error;
}

export default async function request(url, options) {
    return fetch(url, { timeout: 10 * 1000, ...options })
        .then(checkStatus)
        .then(parseJSON)
        .then((data) => ({ data, success: true }))
        .catch((err) => ({ err, success: false }));
}
