const BookingOption = require('../models/bookingoption.model');

// @desc    Get all bookingoptions
// @route   GET /api/bookingoptions
// @access  Public
exports.getBookingOptions = async (_req, res, _next) => {
    try {
        const bookingoptions = await BookingOption.find();
        return res.status(200).json({
            success: true,
            count: bookingoptions.length,
            data: bookingoptions,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
}

// @desc    Get single bookingoption
// @route   GET /api/bookingoptions/:id
// @access  Public
exports.getBookingOption = async (req, res, _next) => {
    try {
        const bookingoption = await BookingOption.findById(req.params.id);
        if (!bookingoption) {
            return res.status(404).json({
                success: false,
                error: 'No bookingoption found',
            });
        }
        return res.status(200).json({
            success: true,
            data: bookingoption,
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

// @desc    Add bookingoption
// @route   POST /api/bookingoptions
// @access  Public
exports.addBookingOption = async (req, res, _next) => {
    try {
        const bookingoption = await BookingOption.create(req.body);
        return res.status(201).json({
            success: true,
            data: bookingoption,
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages,
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error',
            });
        }
    }
}

// @desc    Update bookingoption
// @route   PUT /api/bookingoptions/:id
// @access  Public
exports.updateBookingOption = async (req, res, _next) => {
    try {
        const bookingoption = await BookingOption.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!bookingoption) {
            return res.status(404).json({
                success: false,
                error: 'No bookingoption found',
            });
        }
        return res.status(200).json({
            success: true,
            data: bookingoption,
        });
    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({
                success: false,
                error: 'Invalid ID',
            });
        } else if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages,
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error',
            });
        }
    }
}

// @desc    Delete bookingoption
// @route   DELETE /api/bookingoptions/:id
// @access  Public
exports.deleteBookingOption = async (req, res, _next) => {
    try {
        const bookingoption = await BookingOption.findByIdAndDelete(req.params.id);
        if (!bookingoption) {
            return res.status(404).json({
                success: false,
                error: 'No bookingoption found',
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
