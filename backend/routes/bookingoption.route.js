const express = require('express');

const router = express.Router();

const {
    getBookingOptions,
    getBookingOption,
    addBookingOption,
    updateBookingOption,
    deleteBookingOption,
} = require('../controllers/bookingoption.controller');

router.route('/').get(getBookingOptions).post(addBookingOption);

router.route('/:id').get(getBookingOption).put(updateBookingOption).delete(deleteBookingOption);

module.exports = router;
