const express = require('express')  
const router = express.Router()
const mysql = require('mysql2/promise');

// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: `${process.env.mysqlpasswd}`,
//     database: "moviesproject",
//     // rowsAsArray: true 
// })

// function testConnection(connection){
//     connection.connect(function(err){
//         if(err) throw err;
//         console.log("Connected!")
//     });
// }


//endpoint: /movies
//POST
const createMovies = async(req, res) => {
    const {title, description, date, time, showings } = req.body

    if(!title || !description || !date || !time || !showings) {
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
    // create the connection
    const connection = await mysql.createConnection({host:'localhost', user: 'root', password: `${process.env.mysqlpasswd}`, database: 'moviesproject'});
    let obj = ""
    let obj2 = ""

    obj = await connection.execute('SELECT MovieID, title FROM `Movie`');
    
    obj2 = await connection.execute('SELECT Showing.MovieID, Movie.title, Start_Time, Datetime  FROM  Showing, Movie WHERE Showing.MovieID = Movie.MovieID ')
    //getting the first index of each query object
    movieobj = obj[0];
    movieobj2 = obj2[0];
    console.log(movieobj)
    console.log(movieobj2)

    let result = {
        // ...movieobj,
       ...movieobj2
    }

      res.status(200).json({movies: [result]})
}




module.exports = {
    createMovies,
    getmovies,

    
}