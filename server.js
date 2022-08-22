const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    console.log("Bop")
    res.send("Yo!")
})

app.get("/starwars", (req, res) => {
    res.send({
        characterName: "Luke Skywalker",
        characterAge: 1500,
        lightsaber: "green",
        Dad: "Darth Vader",
        quip: "May the force be with you."
    })
})


app.listen(3001)
