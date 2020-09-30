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

todoRoutes.put('/todos/:id',(request, response) => {
    const { id } = request.params;

    const IdIndex = todos.findIndex(item => item.id === id);

    if(IdIndex < 0){
       return response.status(400).json({error: 'To-Do not found'})
    }

    const {isDone} = request.body;
    todos[IdIndex].isDone = isDone;

    const findTodo = todos.find(todo => todo.id === id);
    return response.json(findTodo);
})

todoRoutes.delete("/todos/:id", (request, response) => {
    const { id } = request.params;

    const todoIndex = todos.findIndex(item => item.id === id);

    if(todoIndex < 0){
       return response.status(400).json({error: 'To-Do not found'})
    }

    todos.splice(todoIndex,1);
   return response.json({message: 'Todo apagado'})
})

module.exports = todoRoutes;