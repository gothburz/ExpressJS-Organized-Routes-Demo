const express = require('express');
let api = express.Router();

api.get("/info", (req, res) => {
    const status = {
        "Status": "Running"
    };
    res.send(status);
});

module.exports = api;