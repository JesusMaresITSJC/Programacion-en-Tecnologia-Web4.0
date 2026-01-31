const mongoose = require('mongoose');
const conectardb = async() => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/crud_node');
        console.log('coneccion exitosa');
    } catch (error) {
        console.log('Tas mal chato');
        process.exit(1);
    }
};
module.exports = conectardb;