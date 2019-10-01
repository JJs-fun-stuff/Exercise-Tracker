const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//create express server
const app = express();
const port = process.env.PORT || 8080;
//middleware
app.use(cors());
//allow server to receiving and sending in JSON file
app.use(express.json());

//have our variable in .env file
require('dotenv').config();



uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully.");
})


const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/rest-api-node',{useNewUrlParser: true})

//Start the server in certain port
app.listen(port, () => {
    console.log(`Our server is running on port : ${port}`)
})



