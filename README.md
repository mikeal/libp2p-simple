# libp2p-simple

Pre-configured libp2p module.

## Usage

```JavaScript
const libp2p = require('libp2p-simple')

let node = libp2p() // returns libp2p instance.
```

Can be used in Node.js and in the browser and each will be configured
for the transports in that environment.

The configurations are pulled from
[`js-ipfs`](https://github.com/ipfs/js-ipfs)
[nodejs](https://github.com/ipfs/js-ipfs/blob/master/src/core/runtime/libp2p-nodejs.js) and
[browser](https://github.com/ipfs/js-ipfs/blob/master/src/core/runtime/libp2p-browser.js) bundles.

## API

### `libp2p([...args])`

Arguments can be passed in any order. Valid arguments are:

* Instance of PeerID.
* Instance of PeerInfo.
* Instance of PeerBook.

