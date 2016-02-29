var express = require('express');
var router = express.Router();
var pg = require('pg');

var connectionString = '';

if(process.env.DATABASE_URL !== undefined) {
    connectionString = process.env.DATABASE_URL + 'ssl';
} else {
    connectionString = 'postgres://localhost:5432/iota';
}

router.get('/', function(req, res) {
    var results = [];

    pg.connect(connectionString, function(err, client, done) {
        var query = client.query('SELECT * FROM animals');

        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
            done();
            return res.json(results);
        });

        if(err) {
            console.log(err);
        }
    });
});

router.post('/', function(req, res) {
    var newFav = [req.body[0], req.body[1], req.body[2], req.body[3]];
    var results = [];

    pg.connect(connectionString, function(err, client, done) {
        var query = client.query('INSERT INTO animals (id, name, image, description) VALUES ($1, $2, $3, $4)', newFav);

        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
            done();
            return res.json(results);
        });

        if(err) {
            console.log(err);
        }
    });
});


module.exports = router;