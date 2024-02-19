const express = require("express")
const app = express();
const mongoose = require("mongoose")

const mongoUrl = "mongodb+srv://joaocar2003:admin@cluster0.jcpvasx.mongodb.net/?retryWrites=true&w=majority"

mongoose
    .connect(mongoUrl)
    .then(() => {
    console.log("A base de dados está conectada")
    })
    .catch((e) => {
        console.log(e)
    })


app.get("/", (req, res) => {
    res.send({ status: "Started"})
})

app.listen(8001,()=>{
    console.log("Server is running on port 8001")
})