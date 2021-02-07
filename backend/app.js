

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');


app.use(cors());
// app.use(express.static(path.join(__dirname, '../frontend')));
app.get('/', (req, res) => res.send({ text: 'Default page' }));
app.get('/hello', (req, res) => {
    console.log('wadfghsdfh');
    return res.send({ message: 'hello' });
});

app.get()

const port = process.env.PORT ? process.env.PORT : 3001;
const server = app.listen(port, error => {
    if (error) {
        console.log('Error starting the server!');
    };
    console.log('Server running on port', server.address().port);
});