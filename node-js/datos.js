const express = require('express');
const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
    res.send('Jesus Alberto Mares Camacho, 24 años, Ingenieria en Sistemas Computacionales');
});

app.listen(puerto, () => {
    console.log(`servidor corriendo en http://localhost:${puerto}`);
});