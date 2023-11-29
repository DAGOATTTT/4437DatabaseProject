const express = require('express')  
const router = express.Router()
const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: `${process.env.mysqlpasswd}`,
    database: "moviesproject"
})

function testConnection(connection){
    connection.connect(function(err){
        if(err) throw err;
        console.log("Connected!")
    });
}


//endpoint: /movies
//POST
const createMovies = async(req, res) => {
    const {title, description} = req.body

    if(!title || !description) {
        res.status(400);
        throw new Error("Please add all fields")
    }
    await testConnection(con);
    //test query
    con.query(
        'SELECT * FROM `Movie`',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          //console.log(fields); // fields contains extra meta data about results, if available
        }
      );

      res.status(200).json({messgae: "success"})
    
}


//endpoint: /movies
// GET
const getmovies = async(req, res) => {
    console.log(process.env.mysqlpasswd)
    testConnection(con);
}




module.exports = {
    createMovies,
    getmovies,

    
}