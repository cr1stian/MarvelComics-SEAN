const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const cors = require('cors');

// Setting Cors
app.use(cors())


// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));


// CRUD HTTP
const comics = require('./router/comics');
app.use(comics)



// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || 3000;
app.set('port', port);


const server = http.createServer(app);


server.listen(port, () => console.log(`Running on localhost:${port}`));
