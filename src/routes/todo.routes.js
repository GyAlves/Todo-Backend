const Router = require('express');
const { uuid, isUuid } = require('uuidv4')

const todoRoutes = Router();

const todos = [];

todoRoutes.get('/todos',(request, response)=> {
    return response.json(todos);
})

todoRoutes.post('/todos',(request, response) => {
    const {name, description, isDone} = request.body;
    const id = uuid();

    if(!isUuid(id)){
      return response.status(400).json({error: 'The ID is not valid'});
    }
    
    const todo = {id, name, description,isDone};
    todos.push(todo);

    return response.json(todo)
})

module.exports = todoRoutes;