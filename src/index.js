const crypto = require('crypto')
const keypair = require('keypair')
const rsa = require('libp2p-crypto/src/keys/rsa-class')
const PeerId = require('peer-id')
const PeerInfo = require('peer-info')
const PeerBook = require('peer-book')
const multihashes = require('multihashes')
const {pem2jwk} = require('pem-jwk')

const sha2 = b => crypto.createHash('sha256').update(b).digest()

/* synchronous version of PeerId creation */
const create = () => {
  let p = keypair({ bits: 2048 })
  let privKey = new rsa.RsaPrivateKey(pem2jwk(p.private), pem2jwk(p.public))
  let digest = multihashes.encode(sha2(privKey.bytes), 'sha2-256')
  return new PeerId(digest, privKey)
}

module.exports = P2PNode => {
  return (...args) => {
    let peerID
    let peerInfo
    let peerBook
    args.forEach(arg => {
      if (arg instanceof PeerId) peerID = arg
      if (arg instanceof PeerInfo) peerInfo = arg
      if (arg instanceof PeerBook) peerBook = arg
    })
    if (!peerID && !peerInfo) peerID = create()
    if (!peerInfo) peerInfo = new PeerInfo(peerID)
    if (!peerBook) peerBook = new PeerBook()
    return new P2PNode(peerInfo, new PeerBook())
  }
}
