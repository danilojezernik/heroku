const express = require("express")
const app = express()

app.get("/", function(req,res){
        res.send('Deluje! Dogaja se! :D');
})

app.listen(process.env.PORT || 5000)