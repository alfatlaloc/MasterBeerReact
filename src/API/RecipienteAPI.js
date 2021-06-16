import { handleResponse, handleError } from "./apiUtils";

require('dotenv').config();

const baseUrl = process.env.REACT_APP_SERVER_URL+'/Recipiente';

export function getRecipientes() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function updateRecipiente(formData){
  let headers = {
    method: 'PATCH',
    body:formData,
    'Content-type' : 'application/json; charset=UTF-8'
  };
  return fetch(baseUrl,headers)
  .then(handleResponse)
  .catch(handleError);
}

export function crearRecipiente(formData) {
  let headers = {
    method: "POST",
    body: formData,
  };
  return fetch(baseUrl, headers).then(handleResponse).catch(handleError);
}

export function eliminarRecipiente(_id) {
  return fetch(`${baseUrl}?${new URLSearchParams({ _id }).toString()}`, {
    method: "DELETE",
  })
    .then(handleResponse)
    .catch(handleError);
}


