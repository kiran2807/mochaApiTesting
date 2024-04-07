const express = require('express');
const cassandra = require('cassandra-driver');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
var app = express();
app.use(cors());

var client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1'});
client.connect(function(err, result){
    console.log('cassandra connected');
})

exports.addOperation = function(id, firstName, lastName, callback) {
    const query = 'INSERT INTO mochaApiTest.profileCluster (id, firstName, lastName) VALUES (?, ?, ?)';
    client.execute(query, [id, firstName, lastName], { prepare: true }, (err, result) => {
        if(err) {
            callback('err');
        } else {
            callback('success');
        }
    });
};

exports.readOperationWithID = function(id, callback) {
    const query = 'SELECT * FROM mochaApiTest.profileCluster WHERE id = ?';
    client.execute(query, [id], { prepare: true }, (err, result) => {
            const user = result.first();
            callback(user && user.values() && user.values()[1] || 'err');
    });
}

exports.tryreadOperationWithID = function(id, callback) {
    const query = 'SELECT * FROM mochaApiTest.profileCluster WHERE id = ?';
    client.execute(query, [id], { prepare: true }, (err, result) => {
            const user = result.first();
            callback(user && user.values() || 'err');
    });
}