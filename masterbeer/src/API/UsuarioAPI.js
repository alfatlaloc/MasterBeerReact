import { handleResponse, handleError } from "./apiUtils";

require('dotenv').config();

const baseUrl = "http://localhost:8080/Usuario";

export function getUsuarios() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function crearUsuario(Data){
  let headers = {
    method: 'POST',
    body:Data
  };
  return fetch(baseUrl,headers)
  .then(handleResponse)
  .catch(handleError);
}

export function getUserByCorreo(Correo,Contrasena){
  console.log(`${baseUrl}?${new URLSearchParams({Correo}).toString()}`);
  return fetch(`${baseUrl}?${new URLSearchParams({Correo}).toString()}&${new URLSearchParams({Contrasena}).toString()}`)
  .then(handleResponse)
  .catch(handleResponse);
}

export function saveUsuario(Usuario) {
  return fetch(`${baseUrl}?`, {
    method: Usuario.Correo ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    mode:"no-cors",
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
