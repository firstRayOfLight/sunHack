const express = require("express");
const axios = require("axios")
const cors = require("cors")
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}))




app.post("/user",async (req,res) => {
    console.log(req.body)
})



app.listen(8080, () => {
    console.log("server is running on port 8080")
})