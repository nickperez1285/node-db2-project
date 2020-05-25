const express = require('express');

const server = express()

const PORT = 5000; 

server.use(express.json());

server.listen(PORT, ()=> {
console.log('listening  on 5000')
})

const db = require("./data/dbConfig.js");


const cars = require("./api/cars.js")

server.use("/", cars)
module.exports = server;
