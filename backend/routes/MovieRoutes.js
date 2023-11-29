const express = require('express');
const router = express.Router();
const {createMovies, getmovies} = require('../controllers/MovieController');

router.post('/', createMovies)
router.get('/', getmovies)


module.exports = router