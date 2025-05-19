const fs = require('fs');
const path = require('path');
const { Command } = require('commander');

const program = new Command();

const TODOS_FILE = path.join(__dirname, 'todos.json');

if (!fs.existsSync(TODOS_FILE)) {
  fs.writeFileSync(TODOS_FILE, JSON.stringify([]));
}

const readTodos = () => {
  const data = fs.readFileSync(TODOS_FILE, 'utf-8');
  return JSON.parse(data);
};

const writeTodos = (todos) => {
  fs.writeFileSync(TODOS_FILE, JSON.stringify(todos, null, 2));
};

program
  .command('add <todo>')
  .description('Add a new todo')
  .action((todo) => {
    const todos = readTodos();
    todos.push({ id: Date.now(), text: todo, done: false });
    writeTodos(todos);
    console.log(`Added: "${todo}"`);
  });

program
  .command('delete <id>')
  .description('Delete a todo by its ID')
  .action((id) => {
    const todos = readTodos();
    const filteredTodos = todos.filter((todo) => todo.id !== parseInt(id, 10));
    if (todos.length === filteredTodos.length) {
      console.log(`No todo found with ID: ${id}`);
    } else {
      writeTodos(filteredTodos);
      console.log(`Deleted todo with ID: ${id}`);
    }
  });

program
  .command('done <id>')
  .description('Mark a todo as done by its ID')
  .action((id) => {
    const todos = readTodos();
    const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id, 10));
    if (todoIndex === -1) {
      console.log(`No todo found with ID: ${id}`);
    } else {
      todos[todoIndex].done = true;
      writeTodos(todos);
      console.log(`Marked todo with ID: ${id} as done`);
    }
  });

program
  .command('list')
  .description('List all todos')
  .action(() => {
    const todos = readTodos();
    if (todos.length === 0) {
      console.log('No todos found.');
    } else {
      console.log('Todos:');
      todos.forEach((todo) => {
        console.log(`${todo.id} - ${todo.text} [${todo.done ? 'Done' : 'Pending'}]`);
      });
    }
  });

program.parse(process.argv);
