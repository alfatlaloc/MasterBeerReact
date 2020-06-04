import { handleResponse, handleError } from "./apiUtils";

const baseUrl = "http://192.168.1.123:3000/Recipiente";

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
