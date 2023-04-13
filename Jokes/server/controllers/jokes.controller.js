const mongoose = require('mongoose');
const Joke = require('../models/jokes.model');



module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allDaJokes) => {
            res.json({ jokes: allDaJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
module.exports.findOneJoke = (req, res) => {
    Joke.find({_id : req.params.id})
        .then((singleJoke) => {
            res.json({ joke: singleJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
module.exports.findRandomJoke = (req, res) => {
    Joke.aggregate([{ $sample : {size : 1}}])
        .then((randomJoke) => {
            res.json({ joke: randomJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke=> {
            res.json({joke : newlyCreatedJoke})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
module.exports.updateOneJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id },
        req.body,
        { new: true, runValidators: true })
        .then(updateDaJoke=> {
            res.json({joke : updateDaJoke})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
module.exports.deleteOneJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id },
        req.body,
        { new: true, runValidators: true })
        .then(result=> {
            res.json({result : result})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
