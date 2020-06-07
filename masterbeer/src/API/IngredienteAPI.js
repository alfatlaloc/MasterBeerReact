import { handleResponse, handleError } from "./apiUtils";

require("dotenv").config();

const baseUrl = process.env.REACT_APP_SERVER_URL+'/Ingrediente';

export function getIngredientes() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function crearIngrediente(formData) {
  let headers = {
    method: "POST",
    body: formData,
  };
  return fetch(baseUrl, headers).then(handleResponse).catch(handleError);
}

export function eliminarIngrediente(_id) {
  return fetch(`${baseUrl}?${new URLSearchParams({ _id }).toString()}`, {
    method: "DELETE",
  })
    .then(handleResponse)
    .catch(handleError);
}
