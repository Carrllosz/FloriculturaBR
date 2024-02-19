require("dotenv").config()
const express = require("express")
import cors from "cors";
const mongoose = require("mongoose")

import authRoutes from './routes/auth'

const morgan = require("morgan");

const app = express()

mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log("DB conectado"))
    .catch((err) => console.log("DB erro de conexão: ", err));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan("dev"))

app.use("/api", authRoutes)

app.listen(8000, () => console.log("Servidor running na porta 8000"))

