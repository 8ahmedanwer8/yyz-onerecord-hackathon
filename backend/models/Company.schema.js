const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
    company_name: {
        type: String,
        required: true,
    },
    location: new mongoose.Schema({
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        zip: {
            type: String,
            required: true,
        },
    }),
    shipments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Shipment",
        },
    ],
    warehouses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Warehouse",
        },
    ],
    booking_options: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BookingOption",
        },
    ],
}, {
    timestamps: true,
});

CompanySchema.index({ company_name: 1 }, { unique: true });

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
