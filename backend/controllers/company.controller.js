const Company = require("../models/Company.schema");


// desc    Get all companies
// route   GET /api/companies
// access  Public
exports.getCompanies = async (_req, res, _next) => {
    try {
        const companies = await Company.find();
        return res.status(200).json({
            success: true,
            count: companies.length,
            data: companies,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
}

// @desc    Get single company
// @route   GET /api/companies/:id
// @access  Public
exports.getCompany = async (req, res, _next) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) {
            return res.status(404).json({
                success: false,
                error: "No company found",
            });
        }
        return res.status(200).json({
            success: true,
            data: company,
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
}

// @desc    Add company
// @route   POST /api/companies
// @access  Public
exports.addCompany = async (req, res, _next) => {
    try {
        const company = await Company.create(req.body);
        return res.status(201).json({
            success: true,
            data: company,
        });
    } catch (error) {
        if (error.name === "MongoServerError" && error.code === 11000) {
            return res.status(400).json({
                success: false,
                error: "Company already exists",
            });
        }
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

// @desc    Update company
// @route   PUT /api/companies/:id
// @access  Public
exports.updateCompany = async (req, res, _next) => {
    try {
        const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!company) {
            return res.status(404).json({
                success: false,
                error: "No company found",
            });
        }
        return res.status(200).json({
            success: true,
            data: company,
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

// @desc    Delete company
// @route   DELETE /api/companies/:id
// @access  Public
exports.deleteCompany = async (req, res, _next) => {
    try {
        const company = await Company.findByIdAndDelete(req.params.id);
        if (!company) {
            return res.status(404).json({
                success: false,
                error: "No company found",
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
