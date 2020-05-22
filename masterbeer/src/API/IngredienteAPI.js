import { handleResponse, handleError } from "./apiUtils";

require("dotenv").config();

const baseUrl = "http://localhost:8080/Ingrediente";

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
