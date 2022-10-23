const Shipment = require('../models/shipment.model');

// @desc    Get all shipments
// @route   GET /api/shipments
// @access  Public
exports.getShipments = async (_req, res, _next) => {
    try {
        const shipments = await Shipment.find();
        return res.status(200).json({
            success: true,
            count: shipments.length,
            data: shipments,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
}

// @desc    Get single shipment
// @route   GET /api/shipments/:id
// @access  Public
exports.getShipment = async (req, res, _next) => {
    try {
        const shipment = await Shipment.findById(req.params.id);
        if (!shipment) {
            return res.status(404).json({
                success: false,
                error: 'No shipment found',
            });
        }
        return res.status(200).json({
            success: true,
            data: shipment,
        });
    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({
                success: false,
                error: 'Invalid ID',
            });
        }
        return res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
}

// @desc    Add shipment
// @route   POST /api/shipments
// @access  Public
exports.addShipment = async (req, res, _next) => {
    try {
        const shipment = await Shipment.create(req.body);
        return res.status(201).json({
            success: true,
            data: shipment,
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map((val) => val.message);
            return res.status(400).json({
                success: false,
                error: messages,
            });
        }
        return res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
}

// @desc    Update shipment
// @route   PUT /api/shipments/:id
// @access  Public
exports.updateShipment = async (req, res, _next) => {
    try {
        const shipment = await Shipment.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!shipment) {
            return res.status(404).json({
                success: false,
                error: 'No shipment found',
            });
        }
        return res.status(200).json({
            success: true,
            data: shipment,
        });
    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({
                success: false,
                error: 'Invalid ID',
            });
        }
        return res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
}

// @desc    Delete shipment
// @route   DELETE /api/shipments/:id
// @access  Public
exports.deleteShipment = async (req, res, _next) => {
    try {
        const shipment = await Shipment.findByIdAndDelete(req.params.id);
        if (!shipment) {
            return res.status(404).json({
                success: false,
                error: 'No shipment found',
            });
        }
        return res.status(200).json({
            success: true,
            data: {},
        });
    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({
                success: false,
                error: 'Invalid ID',
            });
        }
        return res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
}
