# hamjs-rpc-client-node
A NodeJS RPC Client for [@hamjs/rpc-server](https://github.com/hadihammurabi/hamjs-rpc-server)

## How to use?
### Installation
First, create your NodeJs project using `npm init` command.
Then run command below inside that project.

```npm i https://github.com/hadihammurabi/hamjs-rpc-client-node```

### Connecting to RPC Server
Before you connect to RPC server, don't forget to run the server first
([read here](https://github.com/hadihammurabi/hamjs-rpc-server#creating-rpc-server))!
Then, type this on your `.js` file.

```js
// importing this package 
const rpc = require('@hamjs/rpc-client');

// connecting to RPC server
rpc.connect('http://localhost:8080');
```

### Call a Procedure
All procedure calls are done with Promise. You can see example below.

```js
// call sum procedure
// send parameters as an object
rpc
  .sum(1, 2)
  .then(sum => {
    return rpc.min(sum, 5);
  })
  .then(min => {
    console.log('result: ', min);
  })
  .catch(console.log);
```

## Contributing
Read [here](https://github.com/hadihammurabi/hamjs-rpc-server#contributing)!
