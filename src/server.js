var mysql = require('mysql');
const express = require('express')
const path = require('path')
const app = express()
const port = 3001;
const PRODUCTION = false;

app.use(express.json())
if (PRODUCTION) {
    app.use(express.static(path.resolve(__dirname, '../build')));
}
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "eugenio1996",
    database: "wedding"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to DB");
});

app.post('/api/getInvited', (req, res) => {
    var first_name = req.body.firstName.toLowerCase();
    var last_name = req.body.lastName.toLowerCase();
    con.query("SELECT id, first_name, last_name, clan, state FROM `invited` WHERE (LOWER(first_name) = '" + first_name + "' OR find_in_set('" + first_name + "', LOWER(tag)) <> 0) AND LOWER(last_name) = '" + last_name + "' LIMIT 1", function (err, result, fields) {
        if (err) throw err;
        if (result.length) {
            for (var i in result) {
                if (result[i].clan != "") {
                    con.query("SELECT id, first_name, last_name, state FROM `invited` WHERE clan = '" + result[i].clan + "' order by first_name asc", function (err, result, fields) {
                        console.log(result);
                        res.json(result);
                    });
                } else {
                    console.log(result);
                    res.json(result);
                }
            }
        } else {
            res.json(result);
        }
    });
});

app.post('/api/updateInvited', (req, res) => {
    var invited = req.body.invited;
    console.log(invited);
    for (var i in invited) {
        con.query("UPDATE `invited` SET state = '" + invited[i].state + "' WHERE id = " + invited[i].id, function (err, result, fields) {
            if (err) throw err;
        });
    }
    res.sendStatus(200);
});

app.get('/api/:version', function (req, res) {
    res.send(req.params.version);
});

if (PRODUCTION) {
    app.get('*', (req, res) => {
        console.log('react app');
        res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
    });
}

app.listen(port);
console.log('Server started at http://localhost:' + port);