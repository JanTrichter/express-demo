const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// configure CORS to avoid CORS errors
app.use(cors());

// configure body parser so we can read req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// lets create a fake "database" to store our users
let users = [];

// Endpoint for creating a new user
app.post("/createuser", (req, res) => {
    console.log("User created: ", req.body);

    // add user
    let user = req.body;
    users.push(user);

    // tell the client that the user was created (201 == "Created")
    res.status(201);
    res.end();
});

// this endpoint allows the client to get a list of all users
app.get("/users", (req, res) => {
    res.send(JSON.stringify(users));
    res.status(200);
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
