const { randomInt } = require('crypto');
const express = require('express')  
const router = express.Router()
const mysql = require('mysql2/promise');


//endpoint: /users
// POST
const createuser = async(req, res) => {
    let UserID = randomInt(1,1000)
    const connection = await mysql.createConnection({host:'localhost', user: 'root', password: `${process.env.mysqlpasswd}`, database: 'moviesproject'});
    const {name, password, email, Phone_Number} = req.body;

    userobj = await connection.execute(`INSERT INTO User(UserID, name, password, email, Phone_Number) VALUES(${UserID}, '${name}', ${password}, '${email}', ${Phone_Number})`);

    res.status(200).json({message:"Successfully created user", id: `${UserID}`})
}




module.exports = {
    createuser
}