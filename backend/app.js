const express = require('express');

const app = express();

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });



app.post('/api/stuff', (req, res) => {
    console.log(req.body);
    
    res.status(201).json({
        message: 'Objet créé !'
    });
    });



module.exports = app;