import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getTodoItems = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/todo.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createTodoItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/todo.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateTodoItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/todo/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteTodoItem = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/todo/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export default {
  getTodoItems, createTodoItem, updateTodoItem, deleteTodoItem,
};
