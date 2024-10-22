const express = require("express");
const cors = require("cors")
require("dotenv").config();

// making the express app
const app = express();

// importing files
require("./config/database");

// importing routers
const authenticationRoutes = require("./routes/users");
const anthologyRoutes = require("./routes/anthology");

// middleware
app.use(express.json());
app.use(cors());

// register routes
app.use("/api/v1.0.0/authentication/", authenticationRoutes);
app.use("/api/v1.0.0/anthology/", anthologyRoutes);
// app.use("/api/v1.0.0/picture/", pictureRoutes); // to be done later

// starting up the node-express server
app.listen(process.env.PORT, () => {
    console.log("server is running");
})