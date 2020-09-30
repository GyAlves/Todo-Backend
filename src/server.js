const  express = require('express');
const routes = require('./routes/todo.routes');

const server = express();
server.use(express.json());
server.use(routes);

server.listen(3000, () => {
    console.log('Server started on port 3000')
}) 