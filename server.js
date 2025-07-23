const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/",(req, res) =>  {
    res.render("homepage")
} )

app.get("/login", (req, res) => {
    res.render("login")
})

app.post("/register", (req, res) => {
    
})

app.listen(2000)
