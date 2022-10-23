const mongoose = require("mongoose");

const ShipmentSchema = new mongoose.Schema({
    dimensions: new mongoose.Schema({
        length: {
            type: Number,
            required: true,
        },
        width: {
            type: Number,
            required: true,
        },
        height: {
            type: Number,
            required: true,
        },
        volume: {
            type: Number,
            required: true,
        },
    }),
    gross_weight: {
        type: Number,
        required: true,
    },
    piece_count: {
        type: Number,
        required: true,
    },
    delivery_location: new mongoose.Schema({
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
    freight_forwarder: {
        type: String,
        required: true,
    },
    shipper: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true,
    },
}, {
    timestamps: true,
});

const Shipment = mongoose.model("Shipment", ShipmentSchema);

module.exports = Shipment;