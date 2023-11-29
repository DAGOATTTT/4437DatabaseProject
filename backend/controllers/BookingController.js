const express = require('express')  
const router = express.Router()
const mysql = require('mysql2');






//endpoint: /bookings
// GET
const getbookings = async(req, res) => {
    console.log(process.env.mysqlpasswd)
    testConnection(con);
}

//endpoint: /bookings
// POST
const createbookings = async(req, res) => {
    console.log(process.env.mysqlpasswd)
    testConnection(con);
}


//endpoint: /bookings
// DELETE
const deletebookings = async(req, res) => {
    console.log(process.env.mysqlpasswd)
    testConnection(con);
}

module.exports = {
    createbookings,
    deletebookings,
    getbookings
}