const client = require('./lib/client');

module.exports = {
  connect: client.connect,
  call: client.call,
};
