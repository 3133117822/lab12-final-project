const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory todo storage (for demo purposes)
let todos = [
    { id: 1, title: "Welcome to Todo App!", completed: false },
    { id: 2, title: "This is a sample task", completed: false },
    { id: 3, title: "You can add, edit, and delete tasks", completed: true }
];

let nextId = 4;

// ===== API Routes =====

// Get all todos
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// Add a new todo
app.post('/api/todos', (req, res) => {
    const { title } = req.body;
    if (!title || title.trim() === '') {
        return res.status(400).json({ error: 'Title is required' });
    }
    const newTodo = {
        id: nextId++,
        title: title.trim(),
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Update a todo (toggle complete or edit title)
app.put('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    if (req.body.completed !== undefined) {
        todo.completed = req.body.completed;
    }
    if (req.body.title !== undefined) {
        todo.title = req.body.title.trim();
    }
    res.json(todo);
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    todos.splice(index, 1);
    res.status(204).send();
});

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Todo App is running on http://localhost:${PORT}`);
});
