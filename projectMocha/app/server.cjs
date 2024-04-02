const express = require('express');
const cassandra = require('cassandra-driver');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
var app = express();
app.use(cors());
var crudController = require("../app/crudController.cjs");
app.use(express.json());

app.post("/addOperation", (req, res) => {
    crudController.addOperation(req.body.id, req.body.firstName, req.body.lastName, function(result) {
        if (result == 'err') {
            console.error('Error creating user:', err);
            res.status(500).json({ error: 'Error creating user' });
        } else {
            res.status(200).json({ message: 'User created successfully' });
        }
    });  
});

app.get('/readOperationWithID/:id', (req, res) => {
    crudController.readOperationWithID(req.params.id, function(result) {
        if (result == 'err') {
            console.error('Error reading user:', err);
            res.status(500).json({ error: 'Error reading user' });
        } else {
            console.log(result);
            res.status(200).json({ message: result });
        }
    });
});
app.listen(3000, () => console.log('MochaApiTesting listening on port 3000.'));