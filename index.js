require('dotenv').config();

const server = require('./api/server');

const PORT = process.env.PORT || 9000;

server.listen(PORT, ()=>{
    console.log(`hey, gorgeous! server is listening on port ${PORT}`);
})