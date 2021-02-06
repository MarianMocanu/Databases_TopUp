const app = require('express')();





app.get('/', (req, res, ) => { 
    res.send('hello');
});


const port = process.env.PORT ? process.env.PORT : 3001;
const server = app.listen(port, error => { 
    if (error) {
        console.log('Error starting the server!');
    };
    console.log('Server running on port', server.address().port);
});