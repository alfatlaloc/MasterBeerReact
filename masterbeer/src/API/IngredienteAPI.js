import { handleResponse, handleError } from "./apiUtils";

require('dotenv').config();

const baseUrl = "http://localhost:8080/Ingrediente";

export function getIngredientes() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function crearIngrediente(formData){
  let headers = {
    method: 'POST',
    body:formData
  };
  return fetch(baseUrl,headers)
  .then(handleResponse)
  .catch(handleError);
}

