const fetch = require('isomorphic-fetch');

function getStatus(website, API_BASE_URL = 'https://isitup.org') {
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
