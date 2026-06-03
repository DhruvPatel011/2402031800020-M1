const express = require("express");
const os = require("os");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Server Running");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});