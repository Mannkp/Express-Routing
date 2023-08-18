const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


app.get("/", (req, res) => {

    const num = Math.floor((Math.random() * 10) + 1)
    res.render("home.ejs", {rand : num})
    // res.status(200).send("<h1>Welcome!</h1>")
})




app.listen(7001, () => {
    console.log("Server Started and Listening on PORT_7001");
})