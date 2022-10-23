const express = require('express');
const router = express.Router();
const { getWarehouses, getWarehouse, addWarehouse, updateWarehouse, deleteWarehouse } = require('../controllers/warehouse.controller');

router.route('/').get(getWarehouses).post(addWarehouse);
router.route('/:id').get(getWarehouse).put(updateWarehouse).delete(deleteWarehouse);

module.exports = router;