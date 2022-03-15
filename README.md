# Express Demo

This project contains a small demo of a Node.js + Express app with decoupled vanilla js frontend.

## Quickstart

Pull the repo from GitHub.

Move into the server folder with `cd ./server` and install all necessary dependencies with `npm i`.

You can then start the server with `node server.js`. This should log `Server listening on http://localhost:3000` in the console.

After that, open the client folder and find the `index.html`. Open the `index.html` with the LiveServer Plugin for VSC.

## Use

You can add new users to the server. You can enter a name and if the user is an admin. The users are stored in an array on the server which means that all users will be lost when the server is shut down.

You can also retrieve a list of all users from the server with the "Fetch Users" button.
