import { handleResponse, handleError } from "./apiUtils";

require('dotenv').config();

const baseUrl = process.env.REACT_APP_SERVER_URL+'/Extra';

export function getExtras() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function updateExtra(formData){
  let headers = {
    method: 'PATCH',
    body:formData,
    'Content-type' : 'application/json; charset=UTF-8'
  };
  return fetch(baseUrl,headers)
  .then(handleResponse)
  .catch(handleError);
}

export function crearExtra(formData) {
  let headers = {
    method: "POST",
    body: formData,
  };
  return fetch(baseUrl, headers).then(handleResponse).catch(handleError);
}

export function eliminarExtra(_id) {
  return fetch(`${baseUrl}?${new URLSearchParams({ _id }).toString()}`, {
    method: "DELETE",
  })
    .then(handleResponse)
    .catch(handleError);
}


