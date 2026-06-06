import dotenv from "dotenv";
dotenv.config();

console.log("PORT =", process.env.PORT);
console.log("MONGO_URI =", process.env.MONGO_URI);

import express from "express";
const app = express();

import ContactRoutes from "./routes/contacts.routes.js";
import { connectDB } from "./config/database.js";

const PORT = process.env.PORT

// Database Connection
connectDB()

// Middleware
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

// Routes
app.use("/",ContactRoutes)

app.listen(PORT, () => {
  console.log(`Server started Successfully on port ${PORT}.`)
})


await connectDB();