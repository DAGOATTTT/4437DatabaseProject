const express = require('express')  
const router = express.Router()
const mysql = require('mysql2');


//endpoint: /users
// POST
const createuser = async(req, res) => {
    res.status(200).json({message:"success"})
}


module.exports = {
    createuser
}