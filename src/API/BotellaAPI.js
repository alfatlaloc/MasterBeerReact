import { handleResponse, handleError } from "./apiUtils";

require('dotenv').config();

const baseUrl = process.env.REACT_APP_SERVER_URL + '/Botella';

export const getBotellas = async() => {
    try {
        const res = await fetch(baseUrl);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const getBotellasPreview = async() => {
        try {
            const res = await fetch(baseUrl + '/preview');
            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    }
    /*
    export function getBotellas() {
      return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
    }
    */
export function getOne(_id) {
    return fetch(`${baseUrl}/${_id}`, { method: "GET" })
        .then(handleResponse)
        .catch(handleError);
}

export function crearBotella(formData) {
    let headers = {
        method: 'POST',
        body: formData
    };
    return fetch(baseUrl, headers)
        .then(handleResponse)
        .catch(handleError);
}

export function eliminarBotella(_id) {
    return fetch(`${baseUrl}?${new URLSearchParams({ _id }).toString()}`, {
            method: "DELETE",
        })
        .then(handleResponse)
        .catch(handleError);
}

export function updateBotella(formData) {
    let headers = {
        method: 'PATCH',
        body: formData,
        'Content-type': 'application/json; charset=UTF-8'
    };
    return fetch(baseUrl, headers)
        .then(handleResponse)
        .catch(handleError);
}