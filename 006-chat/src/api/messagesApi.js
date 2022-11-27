import { BASE_URL } from "constants/baseUrl";

export const getMessages = () => {
  return fetch(`${BASE_URL}/messages`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const postMessages = (message) => {
  return fetch(`${BASE_URL}/messages`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
};
