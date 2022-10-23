const mongoose = require("mongoose");

const WarehouseSchema = new mongoose.Schema({
    name: {
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
    shelves: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Shelf",
        },
    ],
    booking_options: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BookingOption",
        },
    ],
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true,
    },
}, {
    timestamps: true,
});

WarehouseSchema.index({ name: 1 }, { unique: true });
WarehouseSchema.index({ location: 1 }, { unique: true });

const Warehouse = mongoose.model("Warehouse", WarehouseSchema);

module.exports = Warehouse;
