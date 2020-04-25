import { handleResponse, handleError } from "./apiUtils";

require('dotenv').config();

const baseUrl = "http://192.168.0.9:8080/Botella/";

export function getBotellas() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
