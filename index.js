const express = require("express");
const mysql = require("mysql");
const app = express();

const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "instrukcije"
});

db.connect(function(err){
        if(!!err) {
                throw err;
        } else {
                console.log("Connected")
        }
});


app.get("/", function(req,res){
        res.send('Deluje! Dogaja se! HAHA :D');
});

app.listen(process.env.PORT || 5000)