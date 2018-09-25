import axios from "axios";

export default {
    // Get entire inventory
    getInventory: function() {
        return axios.get("/api/inventory");
    },
    // Gets the artwork with the given id
    getArtwork: function(id) {
        return axios.get("/api/inventory/" + id);
    },
    // Deletes the artwork with the given id
    deleteArtwork: function(id) {
        return axios.delete("/api/inventory/" + id);
    },
    saveArtwork: function(inventoryData) {
        return axios.post("/api/inventory", inventoryData);
    }
};