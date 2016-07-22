const fetch = require('isomorphic-fetch');

const API_BASE_URL = 'https://isitup.org';

function getStatus(website) {
  const address = `${API_BASE_URL}/${website}.json`;
  return new Promise((res, rej) => {
    fetch(address).then(response => {
      if (response.status >= 400) {
        return rej('Bad response from server');
      }
      return res(response.json());
    });
  });
}

module.exports = getStatus;
