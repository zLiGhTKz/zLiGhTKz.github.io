var express = require('express');
var router = express.Router();

const sqlite = require('sqlite3').verbose();
db = new sqlite.Database("./db.sqlite", sqlite.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

router.post('/', (req, res) => {
    const {year, book, price}=req.body;
    sql = "INSERT INTO ID (year, book, price) VALUES (?, ?, ?)";
    db.run(sql, [year, book, price], (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('inserted');
    });
    return res.status(200).send('inserted');
})

router.get('/', function(req, res, next) {
    sql= "SELECT * FROM ID";
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
module.exports = router;