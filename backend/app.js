const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();
const db = require("./db/db");

const app = express();

// Middleware
app.use(express.json()); //  Parses JSON requests
app.use(cors()); //  Allows cross-origin requests

app.use("/api/v1", require("./routes/transactions"));


// Debugging log
console.log("Loading routes...");

app.use((req, res, next) => {
    console.log(`Route Not Found: ${req.method} ${req.url}`);
    next();
});




// Load routes dynamically
readdirSync("./routes").map((route) => {
    console.log(` Loaded: ${route}`); // Debugging
    app.use("/api/v1", require(`./routes/${route}`));
});

const PORT = process.env.PORT || 5000;
db();
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
