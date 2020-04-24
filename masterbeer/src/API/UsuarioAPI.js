import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:8080/Usuario/";

export function getUsuarios() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveUsuario(Usuario) {
  return fetch(baseUrl + (Usuario.correo || ""), {
    method: Usuario.Correo ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(Usuario)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteUsuario(uCorreo) {
  return fetch(baseUrl + uCorreo, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}