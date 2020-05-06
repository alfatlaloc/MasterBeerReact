import { handleResponse, handleError } from "./apiUtils";

require('dotenv').config();

const baseUrl = "http://192.168.1.123:8080/Botella";

export function getBotellas() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function crearBotella(formData){
  let headers = {
    method: 'POST',
    'Content-Type' : "application/json",
    body: formData
  };
  return fetch(baseUrl,headers)
  .then(handleResponse)
  .catch(handleError);
}