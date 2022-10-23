const Warehouse = require("../models/Warehouse.schema");

// @desc    Get all warehouses
// @route   GET /api/warehouses
// @access  Public
exports.getWarehouses = async (_req, res, _next) => {
    try {
        const warehouses = await Warehouse.find();
        return res.status(200).json({
            success: true,
            count: warehouses.length,
            data: warehouses,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
}

// @desc    Get single warehouse
// @route   GET /api/warehouses/:id
// @access  Public
exports.getWarehouse = async (req, res, _next) => {
    try {
        const warehouse = await Warehouse.findById(req.params.id);
        if (!warehouse) {
            return res.status(404).json({
                success: false,
                error: "No warehouse found",
            });
        }
        return res.status(200).json({
            success: true,
            data: warehouse,
        });
    } catch (error) {
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
}

// @desc    Add warehouse
// @route   POST /api/warehouses
// @access  Public
exports.addWarehouse = async (req, res, _next) => {
    try {
        if (!req.body) return res.status(400).json({ success: false, error: "You must provide a warehouse information" });
        const warehouse = await Warehouse.create(req.body);
        return res.status(201).json({
            success: true,
            data: warehouse,
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map((val) => val.message);
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

// @desc    Update warehouse
// @route   PUT /api/warehouses/:id
// @access  Public
exports.updateWarehouse = async (req, res, _next) => {
    try {
        const warehouse = await Warehouse.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!warehouse) {
            return res.status(404).json({
                success: false,
                error: "No warehouse found",
            });
        }
        return res.status(200).json({
            success: true,
            data: warehouse,
        });
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                success: false,
                error: "Invalid ID",
            });
        } else if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map((val) => val.message);
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

// @desc    Delete warehouse
// @route   DELETE /api/warehouses/:id
// @access  Public
exports.deleteWarehouse = async (req, res, _next) => {
    try {
        const warehouse = await Warehouse.findByIdAndDelete(req.params.id);
        if (!warehouse) {
            return res.status(404).json({
                success: false,
                error: "No warehouse found",
            });
        }
        return res.status(200).json({
            success: true,
            data: {},
        });
    } catch (error) {
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
}
