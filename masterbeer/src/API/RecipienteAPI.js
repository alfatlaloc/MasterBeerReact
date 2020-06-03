import { handleResponse, handleError } from "./apiUtils";

const baseUrl = "http://localhost:8080/Recipiente";

export function getRecipientes() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
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
