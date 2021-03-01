const express = require('express');
require('dotenv').config()
const path = require('path');
const mongoose = require('mongoose');

const { APP_PORT } = require('./config/config');
const { authRouter } = require('./routes');

const app = express();

_connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), '../barbershop')));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/auth', authRouter);

app.listen(420, () => {
    console.log(`Barbershop app is listening at http://localhost:${APP_PORT}`)
});

function _connectDB() {
    mongoose.connect('mongodb://localhost:27017/DB', { useNewUrlParser: true });
    const connect = mongoose.connection;

    connect.on('error', (error) => {
        console.log(error);
    });
}

module.exports = app;
