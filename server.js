const express = require('express')
const server = express();
 
server.all('/', (req, res) => {
    res.send('xd');
});
 
function keepAlive() {
   server.listen(3000, () => { console.log("Si" + Date.now()) });
}

module.exports = keepAlive;