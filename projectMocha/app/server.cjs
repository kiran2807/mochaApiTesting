const express = require('express');
const cassandra = require('cassandra-driver');
const fs = require('fs').promises;
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
var app = express();
app.use(cors());
var crudController = require("../app/crudController.cjs");
app.use(express.json());
const { exec } = require('child_process');
const path = require('path');
const url = `http://localhost:3000}`;


app.get('/', async (req, res) => {
    try {
        // Read the HTML file
        const html = await fs.readFile(path.join(__dirname, 'index.html'), 'utf8');
        // Send the HTML file as the response
        res.send(html);
    } catch (err) {
        // If an error occurs, send a 500 internal server error response
        res.status(500).send('Error reading HTML file.');
    }
});

app.get('/test/', async (req, res) => {
    try {
        // Read the HTML file
        const html = await fs.readFile(path.join(__dirname, 'test.html'), 'utf8');
        // Send the HTML file as the response
        res.send(html);
    } catch (err) {
        // If an error occurs, send a 500 internal server error response
        res.status(500).send('Error reading HTML file.');
    }
});

app.post('/test-exec', (req, res) => {
    const command = 'npm test'; // Replace with the desired command
  
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return res.status(500).send(`Error executing command: ${error}`);
      }
  
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
  
      res.send(`${stdout}`); // Send the output as an HTML response
    });
  });

app.post("/addOperation", (req, res) => {
    crudController.addOperation(req.body.id, req.body.firstName, 
        req.body.lastName, function(result) {
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

app.get('/tryreadOperation/', (req, res) => {
    crudController.tryreadOperationWithID(req.params.id, function(result) {
        if (result == 'err') {
            console.error('Error reading user:', err);
            res.status(500).json({ error: 'Error reading user' });
        } else {
            console.log(result);
            const [id, firstName, lastName] = result;
            const message = `The message id is ${id}, First name is ${firstName} and Last name is ${lastName}.`;
            res.send(message);
        }
    });
});
app.get('/tryreadOperationWithID/:id', async (req, res) => {
    try {
        // Read the HTML file
        // const html = await fs.readFile(path.join(__dirname, 'test2.html'), 'utf8');
        crudController.tryreadOperationWithID(req.params.id, function(result) {
            if (result == 'err') {
                console.error('Error reading user:', err);
                res.status(500).json({ error: 'Error reading user' });
            } else {
                console.log(result);
                const [id, firstName, lastName] = result;
                const message = `The message id is ${id}, First name is ${firstName} and Last name is ${lastName}.`;
                console.log(message)
                // res.send(message);
                res.send(message);
            }
        });
        // res.send(html);
        // console.log(`stdout: ${stdout}`);
        // console.error(`stderr: ${stderr}`);
  
        // res.status(200).send(message);
    } catch (err) {
        // If an error occurs, send a 500 internal server error response
        res.status(500).send('Error reading HTML file.');
    }
    
    
});
app.listen(3000, () => console.log('MochaApiTesting listening on port 3000.'));