const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/movies', require('./routes/MovieRoutes'))
app.use('/bookings', require('./routes/BookingRoutes'))
app.use('/users', require('./routes/UserRoutes'))
app.listen(port, () => console.log('Server listening on port ' + port))