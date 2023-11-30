const express = require('express');
const router = express.Router();
const {createMovies, getmovies, getseats} = require('../controllers/MovieController');

router.post('/', createMovies)
router.get('/', getmovies)
router.get('/seats', getseats)


module.exports = router