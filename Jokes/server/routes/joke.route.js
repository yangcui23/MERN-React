const mongoose = require('mongoose');
const jokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get("/api/jokes", jokeController.findAllJokes);
    app.get("/api/jokes/random" , jokeController.findRandomJoke); 
    app.get("/api/jokes/:id" , jokeController.findOneJoke); 
    app.post("/api/jokes/new" , jokeController.createNewJoke); 
    app.put("/api/jokes/update/:id" , jokeController.updateOneJoke); 
    app.delete("/api/jokes/delete/:id" , jokeController.deleteOneJoke); 
}