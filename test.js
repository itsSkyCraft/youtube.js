const Youtube = require('./index')

const Client = new Youtube('AIzaSyBLxLE2n8rAyMzrHbb0aC9UWdNFakuePL0');

Client.getChannel('windahbasudara', (res) => {
    console.log(res);
});