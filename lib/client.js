const http = require('http');
const url = require('url');

let options = {
  path: '/',
  method: 'POST'
};

const connect = (host) => {
  const parsedURL = url.parse(host);
  options = {
    ...options,
    hostname: parsedURL.hostname,
    port: parsedURL.port || 80,
  };
};

const call = (name, parameters) => new Promise((resolve, reject) => {
  options = {
    ...options,
  }

  const payload = JSON.stringify({
    call: name,
    parameters,
  });

  const req = http.request(options, res => {
    res.on('data', data => {
      resolve(data.toString());
    });
  });

  req.on('error', reject);
  req.write(payload);
  req.end();
});

module.exports = new Proxy({
  connect,
  call,
}, {
  get: (target, prop) => {
    if (target[prop] === undefined) {
      return (...params) => call(prop, params);
    }
    return target[prop];
  }
});
