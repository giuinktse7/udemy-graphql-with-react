const fetch = require('node-fetch');

function getUser(id) {
  return fetch(`http://jonathankran.me/users/${id}`)
  .then(res => res.text());
};

module.exports = {
  getUser
};
