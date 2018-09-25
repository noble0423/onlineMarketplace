const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    title: { 
        type: String,
        trim: true, 
        required: true 
    },
    width: { 
        type: Number, 
        required: true
    },
    height: {
        type: Number, 
        required: true
    },
    quantity: {
        type: Number, 
        required: true
    },
    description: {
        type: String,
        trim: true,
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.export = Inventory;