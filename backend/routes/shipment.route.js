const express = require('express');
const router = express.Router();

const {
    getShipment,
    getShipments,
    addShipment,
    updateShipment,
    deleteShipment,
} = require('../controllers/shipment.controller');

router.route('/').get(getShipments).post(addShipment);

router.route('/:id').get(getShipment).put(updateShipment).delete(deleteShipment);

module.exports = router;
