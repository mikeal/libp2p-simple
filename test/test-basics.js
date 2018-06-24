const {test} = require('tap')
const libp2p = require('../')

const PeerId = require('peer-id')
const PeerInfo = require('peer-info')
const PeerBook = require('peer-book')

test('basic creation', t => {
  t.plan(1)
  let n = libp2p()
  t.ok(n)
})

test('set peerId', t => {
  t.plan(1)
  PeerId.create((err, id) => {
    if (err) throw err
    let n = libp2p(id)
    t.same(id, n.peerInfo.id)
  })
})

test('set peerInfo', t => {
  t.plan(1)
  PeerId.create((err, id) => {
    if (err) throw err
    let p = new PeerInfo(id)
    let n = libp2p(p)
    t.same(p, n.peerInfo)
  })
})

test('set peerBook', t => {
  t.plan(1)
  let b = new PeerBook()
  let n = libp2p(b)
  t.same(n.peerBook, b)
})
