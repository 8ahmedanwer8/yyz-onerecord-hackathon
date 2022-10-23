const express = require("express");
const router = express.Router();

const {
    getCompany,
    getCompanies,
    addCompany,
    updateCompany,
    deleteCompany,
} = require("../controllers/company.controller");

router.route("/").get(getCompanies).post(addCompany);

router.route("/:id").get(getCompany).put(updateCompany).delete(deleteCompany);

module.exports = router;
