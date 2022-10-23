const mongoose = require("mongoose");

const ShelfSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    shipment_objects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Shipment",
        },
    ],
}, {
    timestamps: true,
});

ShelfSchema.index({ name: 1 }, { unique: true });

const Shelf = mongoose.model("Shelf", ShelfSchema);

module.exports = Shelf;
