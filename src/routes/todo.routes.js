const Router = require('express');

const todoRoutes = Router();

todoRoutes.get('/todos',(request, response)=> {
    console.log('Here')
})

module.exports = todoRoutes;