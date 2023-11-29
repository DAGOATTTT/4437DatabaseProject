const express = require('express');
const router = express.Router();
const {getbookings,createbookings, deletebookings}  = require('../controllers/BookingController');

router.post('/', createbookings);
router.get('/', getbookings);
router.delete('/', deletebookings);

module.exports = router