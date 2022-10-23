const mongoose = require("mongoose");

const BookingOptionSchema = new mongoose.Schema({
    shipper: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true,
    },
    freight_forwarder: {
        type: String,
        required: true,
    },
    booking_status: {
        type: String,
        required: true,
        enum: ["CREATED", "PENDING_APPROVAL", "IN_PROGRESS", "RECEIVED", "DELAYED", "CANCELLED"],
    },
    scheduled_time: {
        type: Date,
        required: true,
    },
    recepient_warehouse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Warehouse",
        required: true,
    },
    shipment_details: {
        type: String,
        required: true,
    },
    shipments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Shipment",
        },
    ],
}, {
    timestamps: true,
});

BookingOptionSchema.index({ shipper: 1, freight_forwarder: 1, scheduled_time: 1 }, { unique: true });

const BookingOption = mongoose.model("BookingOption", BookingOptionSchema);

module.exports = BookingOption;
