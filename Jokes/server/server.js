require('dotenv').config();

const express = require("express");

const port = process.env.PORT;

const app = express();


require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const JokeRoutes =  require("./routes/joke.route");
JokeRoutes(app);



app.listen( port, () => console.log(`Listening on port: ${port}`) );