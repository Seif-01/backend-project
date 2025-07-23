const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/",(req, res) =>  {
    res.send("hello world from our cool app")
} )

app.listen(2000)
