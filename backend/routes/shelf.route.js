const express = require("express");
const router = express.Router();
const {
    getShelf,
    getShelves,
    addShelf,
    updateShelf,
    deleteShelf,
} = require("../controllers/shelf.controller");

router.route("/").get(getShelves).post(addShelf);

router.route("/:id").get(getShelf).put(updateShelf).delete(deleteShelf);

module.exports = router;