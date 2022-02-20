const express = require("express");
const mysql = require("mysql");
const app = express();

const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "instrukcije"
});

db.connect(function(error){
        if(!!error) {
                cosole.log("Error");
        } else {
                console.log("Connected")
        }
});

app.get("/", function(req,res){
        res.send('Deluje! Dogaja se! HAHA :D');
        db.query("SELECT * FROM instrukcije", function (error, rows, fields))
        if (!!error) {
                console.log("Error in the query");
        } else {
                console.log("Successful query");
        }
});

app.listen(process.env.PORT || 5000)