import { handleResponse, handleError } from "./apiUtils";

require('dotenv').config();

const baseUrl = "http://localhost:8080/Botella";

export function getBotellas() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function crearBotella(formData){
  let headers = {
    method: 'POST',
    body:formData
  };
  return fetch(baseUrl,headers)
  .then(handleResponse)
  .catch(handleError);
}

