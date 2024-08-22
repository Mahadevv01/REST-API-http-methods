const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

app.use(express.json()); // Middleware to parse JSON bodies

// GET: Return all users in JSON format
app.get("/api/users", (req, res) => {
    res.json(users);
});

// GET: Return a user by ID
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send({ error: "User not found" });
    }
});

// POST: Create a new user
app.post("/api/users", (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1; // Simple ID generation (not ideal for production)
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT: Update a user by replacing all fields
app.put("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        users[index] = { id, ...req.body };
        res.json(users[index]);
    } else {
        res.status(404).send({ error: "User not found" });
    }
});

// PATCH: Update specific fields of a user
app.patch("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);

    if (user) {
        Object.assign(user, req.body);
        res.json(user);
    } else {
        res.status(404).send({ error: "User not found" });
    }
});

// DELETE: Remove a user by ID
app.delete("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        const deletedUser = users.splice(index, 1);
        res.json(deletedUser);
    } else {
        res.status(404).send({ error: "User not found" });
    }
});

app.listen(PORT, () => {
    console.log(`SERVER STARTED AT port: ${PORT}`);
});
