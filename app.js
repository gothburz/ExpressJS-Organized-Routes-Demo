const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.use("/api/v1", require("./src/routes/api/v1/routes"));

app.listen(PORT, (testing) => {
    console.log("Server Listening on PORT:", PORT);
});