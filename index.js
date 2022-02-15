const express = require("express")
const app = express()

let name = "Dani";
let oseba = "Učitelj";
let učitelj = "Uroš";

app.get("/", function(req,res){

    if ( oseba === "Uroš") {
            res.send("Živjo Uroš");
        } else {
            res.send("Žal niste prava oseba")
    }

})

app.listen(process.env.PORT || 5000)