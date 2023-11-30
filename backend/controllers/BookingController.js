const { randomInt } = require('crypto');
const express = require('express')  
const router = express.Router()
const mysql = require('mysql2/promise');






//endpoint: /bookings
// GET
const getbookings = async(req, res) => {
    //User ID - returns all tickets associated with this user
    const connection = await mysql.createConnection({host:'localhost', user: 'root', password: `${process.env.mysqlpasswd}`, database: 'moviesproject'});
    let bookingobj = ""
    const {UserID} = req.body
    bookingobj = await connection.execute(`Select * From Ticket Where '${UserID}' = ShowingID`)
    let result = bookingobj[0]
    console.log(result)
    res.status(200).json({bookings: result})

}

//endpoint: /bookings
// POST
const createbookings = async(req, res) => {
   
    //Creating Ticket from showingID, MovieID, SeatNumber
    const connection = await mysql.createConnection({host:'localhost', user: 'root', password: `${process.env.mysqlpasswd}`, database: 'moviesproject'});
    let bookingobj = ""
    let TicketID = randomInt(10, 10000);

    const {ShowingID, MovieID, SeatNumber} = req.body;

    bookingobj = await connection.execute(`INSERT INTO Ticket(TicketID, ShowingID, MovieID, SeatNumber) VALUES(${TicketID}, '${ShowingID}', ${MovieID}, ${SeatNumber})`);
    res.status(200).json({message: "successfully created ticket"})


}


//endpoint: /bookings
// DELETE
const deletebookings = async(req, res) => {
    
}

module.exports = {
    createbookings,
    deletebookings,
    getbookings
}