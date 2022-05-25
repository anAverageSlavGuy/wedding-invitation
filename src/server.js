var mysql = require('mysql');
const https = require('https');
const http = require('http');
const fs = require('fs');
const express = require('express')
const path = require('path')
const app = express()
const port = 3001;
const PRODUCTION = true;

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
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    fs.appendFile('access.log', new Date() + ' - ' + first_name + ' ' +last_name + ' '+ ip +'\n', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
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


https.createServer({
    key: fs.readFileSync('/home/pi/private.key'),
    cert: fs.readFileSync('/home/pi/server.crt')
}, app).listen(443, () => {
    console.log('Listening on port =>', 443);
})

http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(80, () => {
    console.log('Listening on port =>', 80);
});

/* fs.appendFile('message.txt', 'data to append', function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); */