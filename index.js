const express = require("express")
const app = express()

app.get("/", function(req,res){

    let password = "Mozirje";
    let pass1 = "Mozirje";

        res.send.prompt('Iz kod sem?');
    if (password === pass1) {
        res.send("Pravilno! Odlično!");
    } else {
        res.send('Poskušaj ponovno.');
    }
})

app.listen(process.env.PORT || 5000)