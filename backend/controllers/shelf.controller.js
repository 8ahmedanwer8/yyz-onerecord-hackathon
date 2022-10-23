const Shelf = require("../models/Shelf.schema");

// @desc    Get all shelves
// @route   GET /api/shelves
// @access  Public
exports.getShelves = async (_req, res, _next) => {
    try {
        const shelves = await Shelf.find();
        return res.status(200).json({
            success: true,
            count: shelves.length,
            data: shelves,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
};

// @desc    Get single shelf
// @route   GET /api/shelves/:id
// @access  Public
exports.getShelf = async (req, res, _next) => {
    try {
        const shelf = await Shelf.findById(req.params.id);
        if (!shelf) {
            return res.status(404).json({
                success: false,
                error: "No shelf found",
            });
        }
        return res.status(200).json({
            success: true,
            data: shelf,
        });
    }
    catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                success: false,
                error: "Invalid ID",
            });
        }
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
};

// @desc    Add shelf
// @route   POST /api/shelves
// @access  Public
exports.addShelf = async (req, res, _next) => {
    try {
        const shelf = await Shelf.create(req.body);
        return res.status(201).json({
            success: true,
            data: shelf,
        });
    } catch (error) {
        if (error.name === "MongoServerError" && error.code === 11000) {
            return res.status(400).json({
                success: false,
                error: "Shelf already exists",
            });
        }
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages,
            });
        } else {
            return res.status(500).json({
                success: false,
                error: "Server Error",
            });
        }
    }
}

// @desc    Update shelf
// @route   PUT /api/shelves/:id
// @access  Public
exports.updateShelf = async (req, res, _next) => {
    try {
        const shelf = await Shelf.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!shelf) {
            return res.status(404).json({
                success: false,
                error: "No shelf found",
            });
        }
        return res.status(200).json({
            success: true,
            data: shelf,
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages,
            });
        } else {
            return res.status(500).json({
                success: false,
                error: "Server Error",
            });
        }
    }
}

// @desc    Delete shelf
// @route   DELETE /api/shelves/:id
// @access  Public
exports.deleteShelf = async (req, res, _next) => {
    try {
        const shelf = await Shelf.findByIdAndDelete(req.params.id);
        if (!shelf) {
            return res.status(404).json({
                success: false,
                error: "No shelf found",
            });
        }
        return res.status(200).json({
            success: true,
            data: {},
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
}
