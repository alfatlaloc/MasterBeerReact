import { handleResponse, handleError } from "./apiUtils";

require('dotenv').config();

const baseUrl = "http://192.168.0.9:8080/Usuario/";

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
